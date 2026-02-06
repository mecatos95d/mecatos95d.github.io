import {
    ROUTE_CONFIG,
    MODES,
    BUS_VEHICLE_INFO,
    ARRIVAL_INFO,
    FAVORITES,
} from "./data.js";
import { JS_VEHICLE_INFO } from "./js.js";

// BUS_VEHICLE_INFO, JS_VEHICLE_INFO 병합 (수동 데이터 우선)
const VEHICLE_INFO = { ...BUS_VEHICLE_INFO, ...JS_VEHICLE_INFO };

// 노선 번호로 회사 구분 (회사 코드: jb=제부여객, kw=경원여객, yn=용남고속, kj=경진여객)
// 차량 번호 정규화 (한글 → 영어)
function normalizeVehicleId(vehicleId) {
    return vehicleId
        .replace(/사/g, "sa")
        .replace(/바/g, "ba")
        .replace(/아/g, "a")
        .replace(/자/g, "ja")
        .replace(/차/g, "cha")
        .replace(/카/g, "ka")
        .replace(/타/g, "ta")
        .replace(/파/g, "pa")
        .replace(/하/g, "ha");
}

let currentMode = "commute";
let expandedStations = new Set();
let myBusStatus = "alighted"; // 'alighted', 'bus1', 'bus2'
let selectedMyBus = null; // 내가 탄 3102 차량
let showMissed = false; // 놓친 버스 펼치기
let isLoading = true; // 초기 로딩 상태 (true면 로딩 UI 표시)

// API 설정
const STATION_IDS = {
    1002: "277103221", // 의왕톨게이트
};

// 실시간 도착정보 저장
let LIVE_ARRIVAL_INFO = {};

// 마지막 업데이트 시간
let lastUpdateTime = null;

// API 프록시 base URL (Vercel 프록시로 고정)
const API_BASE = "https://github-io-uibus-proxy.vercel.app";

// 초기화
document.addEventListener("DOMContentLoaded", async () => {
    // 초기 로드 시간 설정
    lastUpdateTime = new Date();
    // 초기에는 로딩 화면을 보여줍니다.
    renderStations(); // 초기 렌더링 (업데이트 시간 표시)

    await fetchAllArrivals();
    // 데이터 로드 완료
    isLoading = false;
    lastUpdateTime = new Date();
    setMode("commute");
});

// 모드 설정
function setMode(mode) {
    currentMode = mode;
    expandedStations.clear();
    selectedMyBus = null;
    myBusStatus = "none";
    showMissed = false;

    // 탭 버튼 업데이트
    document.querySelectorAll(".mode-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    // 기본적으로 첫 번째 정류장 펼쳐서 보여주기
    const firstStation = MODES[mode].stations[0];
    if (firstStation) {
        expandedStations.add(firstStation.id);
    }

    renderStations();
}

// 정류장 목록 렌더링 (폴딩)
function renderStations() {
    // 업데이트 시간 표시
    const updateTimeEl = document.getElementById("updateTime");
    if (updateTimeEl) {
        updateTimeEl.textContent = lastUpdateTime
            ? formatUpdateTime(lastUpdateTime)
            : "업데이트 없음";
    }

    const container = document.getElementById("stationList");

    // 로딩 중이면 중앙에 하나의 Loading 텍스트만 보여줍니다.
    if (isLoading) {
        container.innerHTML = `<div class="loading-main">LOADING…</div>`;
        return;
    }

    const stations = MODES[currentMode].stations;

    container.innerHTML = stations
        .map(station => {
            const isExpanded = expandedStations.has(station.id);
            // LIVE_ARRIVAL_INFO 우선, 없으면 ARRIVAL_INFO (mock) 사용
            const arrivals =
                LIVE_ARRIVAL_INFO[station.id] || ARRIVAL_INFO[station.id] || [];
            const transferArrivals = arrivals.filter(a => a.busNo !== station.myBusRoute);

            // 폴딩 헤더 임시 주석처리: 헤더 없이 내부 내용만 표시
            return `
            <div class="station-fold ${station.name === "의왕톨게이트" ? "passed" : ""}">
                ${renderStationContent(station)}
            </div>
        `;
        })
        .join("");
}

// 정류장 토글
function toggleStation(stationId) {
    if (expandedStations.has(stationId)) {
        expandedStations.delete(stationId);
    } else {
        expandedStations.add(stationId);
    }
    renderStations();
}

// 정류장 내용 렌더링
function renderStationContent(station) {
    // 로딩 중이면 로딩 UI만 표시
    if (isLoading) {
        return `<div class="loading">Loading…</div>`;
    }
    // LIVE_ARRIVAL_INFO 우선
    const arrivals = LIVE_ARRIVAL_INFO[station.id] || ARRIVAL_INFO[station.id] || [];

    // 3102 환승 정류장인 경우
    if (station.hasMyBus) {
        const myBusArrivals = arrivals.filter(a => a.busNo === station.myBusRoute);
        const transferArrivals = arrivals.sort((a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0));

        return `
      ${renderMyBusSelector(myBusArrivals, station.myBusRoute)}
      ${renderTransferList(transferArrivals)}
    `;
    }

    // 일반 정류장
    return renderArrivalList(arrivals.sort((a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0)));
}

// 내 버스 선택기 렌더링 (3버튼)
function renderMyBusSelector(myBusArrivals, routeName) {
    // 직후/다다음 버스 정보
    const bus1 = myBusArrivals[0];
    const bus2 = myBusArrivals[1];
    // 분 단위로 고정 표시 (차번 포함)
    function formatRemain(bus) {
        if (!bus) return "없음";
        return `${bus.remainMin}분 (${bus.plateNo.slice(-4)})`;
    }
    const bus1Label = formatRemain(bus1);
    const bus2Label = formatRemain(bus2);
    const routeConfig = ROUTE_CONFIG[routeName] || { color: "#e91e63" }; // 미등록 노선 핀크

    return `
        <div class="my-bus-section">
            <span class="bus-number" style="background-color: ${routeConfig.color}">${routeName}</span>
            <div class="my-bus-buttons">
                <button class="status-btn ${myBusStatus === "alighted" ? "active" : ""}" onclick="selectMyBusOption(null)">하차</button>
                <button class="status-btn ${myBusStatus === "bus1" ? "active" : ""}" onclick="selectMyBusOption(0)" ${!bus1 ? "disabled" : ""}>${bus1Label}</button>
                <button class="status-btn ${myBusStatus === "bus2" ? "active" : ""}" onclick="selectMyBusOption(1)" ${!bus2 ? "disabled" : ""}>${bus2Label}</button>
            </div>
        </div>
    `;
}

// 정류장 이름 포맷 (접두어 제거, 길이 제한)
function formatStationNm(name) {
    if (!name) return "";
    // (가상), (임시), (미정차), (경유) 등 모든 괄호 내용 제거
    let formatted = name.replace(/\([^)]+\)/g, "").trim();
    // 14자 초과시 ... 처리
    if (formatted.length > 14) {
        formatted = formatted.substring(0, 13) + "…";
    }
    return formatted;
}

// 내 버스 옵션 선택 (null: 하차완료, 0: 직후, 1: 다다음)
function selectMyBusOption(busIndex) {
    const mode = MODES[currentMode];
    const transferStation = mode.stations.find(s => s.isTransfer);
    // LIVE_ARRIVAL_INFO 우선
    const arrivals =
        LIVE_ARRIVAL_INFO[transferStation.id] || ARRIVAL_INFO[transferStation.id] || [];
    const myBusArrivals = arrivals.filter(a => a.busNo === transferStation.myBusRoute);

    if (busIndex === null) {
        myBusStatus = "alighted";
        selectedMyBus = null;
    } else if (busIndex === 0 && myBusArrivals[0]) {
        myBusStatus = "bus1";
        selectedMyBus = myBusArrivals[0];
    } else if (busIndex === 1 && myBusArrivals[1]) {
        myBusStatus = "bus2";
        selectedMyBus = myBusArrivals[1];
    }
    showMissed = false;
    renderStations();
}

// 내 버스 선택
function selectMyBus(plateNo, remainMin) {
    if (selectedMyBus && selectedMyBus.plateNo === plateNo) {
        selectedMyBus = null; // 토글 해제
    } else {
        selectedMyBus = { plateNo, remainMin };
    }
    renderStations();
}

// 환승 버스 목록 렌더링
function renderTransferList(arrivals) {
    if (arrivals.length === 0) {
        return '<div class="no-data">환승 가능 버스 없음</div>';
    }

    // 시간 필터링: 하차=15분, 다음차/다다음차=선택차 -1분 ~ 선택차 +10분
    let maxMinutes;
    let minMinutes = 0;
    if (myBusStatus === "alighted" || !selectedMyBus) {
        maxMinutes = 15;
    } else {
        minMinutes = selectedMyBus.remainMin - 1;
        maxMinutes = selectedMyBus.remainMin + 10;
    }
    arrivals = arrivals.filter(
        a => a.remainMin >= minMinutes && a.remainMin <= maxMinutes
    );

    if (arrivals.length === 0) {
        return '<div class="no-data">시간 필터링 후 환승 가능 버스 없음</div>';
    }

    // 시간순 정렬 (predictTimeSec 우선)
    arrivals = arrivals.sort(
        (a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0)
    );

    // 최대 20대 제한
    const limitedArrivals = arrivals.slice(0, 25);

    return `<div class="arrival-list">${limitedArrivals.map(a => renderArrivalRow(a, false)).join("")}</div>`;
}

// 통과한 버스 섹션 (폴딩, 위쪽 배치)
function renderPassedSection(passed) {
    return `
    <div class="passed-section">
      <div class="passed-header" onclick="toggleMissed()">
        <span>${showMissed ? "▼" : "▶"}</span>
        <span>지나간 버스 (${passed.length}대)</span>
      </div>
      ${showMissed ? `<div class="arrival-list passed-list">${passed.map(a => renderArrivalRow(a, "missed")).join("")}</div>` : ""}
    </div>
  `;
}

// 놓친 버스 토글
function toggleMissed() {
    showMissed = !showMissed;
    renderStations();
}

// 일반 도착 목록 렌더링
function renderArrivalList(arrivals) {
    if (arrivals.length === 0) {
        return '<div class="no-data">도착 예정 버스가 없습니다</div>';
    }

    // 임시: 스크롤 테스트용으로 3배 복제 (predictTimeSec 정렬)
    const tripleArrivals = [...arrivals, ...arrivals, ...arrivals].sort(
        (a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0)
    );
    return `<div class="arrival-list">${tripleArrivals.map(a => renderArrivalRow(a, false)).join("")}</div>`;
}

// 도착 정보 행 렌더링
function renderArrivalRow(arrival, transferStatus) {
    // 예약 여부 확인 및 기본 노선 번호 추출
    const isReserved = arrival.busNo.includes("(예약)");
    const baseRouteNo = arrival.busNo.replace(/\(예약\)$/, "");

    // 표시용 노선 번호 (예약이면 +)
    const displayBusNo = isReserved ? baseRouteNo + '+' : baseRouteNo;

    // 노선 설정: 예약 노선은 "(예약)" 포함된 설정 우선, 없으면 기본 노선 설정 사용
    let routeConfig = ROUTE_CONFIG[arrival.busNo]; // 예: "7780(예약)"
    if (!routeConfig) {
        routeConfig = ROUTE_CONFIG[baseRouteNo]; // 예: "7780"
    }
    if (!routeConfig) {
        routeConfig = { color: "#e91e63" }; // 미등록 노선 핑크
    }

    // 예약 태그 표시: 모든 예약 노선은 + 표시만, 별도 태그 없음
    const routeTag = "";

    const normalizedPlateNo = normalizeVehicleId(arrival.plateNo).replace(/^[^0-9a-z]*/, '');
    const digitsOnly = arrival.plateNo.replace(/[^0-9]/g, '');
    const last4Digits = arrival.plateNo.replace(/[^0-9]/g, '').slice(-4); // 전세차 조회용

    // VEHICLE_INFO 조회: 1) 정규화된 번호, 2) 숫자만, 3) 뒷 4자리 (전세차용)
    const vehicleInfo = VEHICLE_INFO[normalizedPlateNo] || VEHICLE_INFO[digitsOnly] || VEHICLE_INFO[last4Digits] || {};
    const favorite = FAVORITES[arrival.plateNo];
    const isSoon = arrival.remainMin <= 3;

    // 경합 판별 (1분 30초 이내 차이)
    let isRacing = false;
    if ((myBusStatus === "bus1" || myBusStatus === "bus2") && selectedMyBus) {
        const diffSec =
            (arrival.predictTimeSec || arrival.remainMin * 60) -
            (selectedMyBus.predictTimeSec || selectedMyBus.remainMin * 60);
        isRacing = Math.abs(diffSec) <= 90; // 1분 30초 이내
    }

    // 환승 상태 표시 - 차번 뒷 4자리 항상 표시
    const plateLast4 = `<span class="plate-last4">${arrival.plateNo.slice(-4)}</span>`;

    // 차량 상태 판별
    let vehicleStatus = getVehicleStatus(arrival, vehicleInfo, favorite);

    // 좌석 표시
    const seatDisplay = arrival.remainSeat < 0 ? "-" : arrival.remainSeat + "석";
    const seatClass = getSeatClass(arrival.remainSeat);

    // 정류장 이름 표시
    const stationClass = arrival.stationNm === "의왕톨게이트" ? "station-nm passed-station" : "station-nm";
    const stationDisplay = `<span class="${stationClass}">${formatStationNm(arrival.stationNm)}</span>`;

    // 시간 표시 (10분 밑이면 초 단위)
    let timeDisplay;
    if (arrival.predictTimeSec && arrival.predictTimeSec < 600) {
        const min = Math.floor(arrival.predictTimeSec / 60);
        const sec = arrival.predictTimeSec % 60;
        timeDisplay = `${min}:${String(sec).padStart(2, "0")}`;
    } else {
        timeDisplay = `${arrival.remainMin}분`;
    }

    // 경합 클래스
    const racingClass = isRacing ? "racing" : "";
    const feederClass = arrival.busNo === "3102" ? "feeder" : "";

    return `
    <div class="arrival-row ${vehicleStatus.class} ${racingClass} ${transferStatus || ""} ${feederClass}" onclick="this.querySelector('.arrival-bottom')?.classList.toggle('folded')">
      <div class="arrival-top">
        <div class="arrival-main">
          <span class="bus-number" style="background-color: ${routeConfig.color}">${displayBusNo}</span>
          ${routeTag}
          <span class="remain-time ${isSoon ? "soon" : ""}">${timeDisplay}</span>
          ${stationDisplay}
          <span class="seat-badge ${seatClass}">${seatDisplay}</span>
        </div>
        <div class="arrival-extra">
          ${(vehicleStatus.badgeParts || []).map(part => {
            if (typeof part === 'string') {
              return `<span class="vehicle-badge">${part}</span>`;
            } else {
              return `<span class="vehicle-badge ${part.class || ''}">${part.text}</span>`;
            }
          }).join("")}
          ${plateLast4}
        </div>
      </div>
      ${vehicleStatus.text ? `<div class="arrival-bottom folded">${vehicleStatus.text}</div>` : ""}
    </div>
  `;
}

// 차량 상태 판별
function getVehicleStatus(arrival, vehicleInfo, favorite) {
    // 별표 차량 (JS_VEHICLE_INFO의 stars)
    if (vehicleInfo.stars) {
        const yearPart = vehicleInfo.year ? `(${vehicleInfo.year})` : '';
        const modelPart = vehicleInfo.model || '';
        const memoPart = vehicleInfo.additionalMemo || '';
        const textParts = [modelPart, yearPart, memoPart].filter(p => p).join(' ');

        return {
            class: "grade-premium",
            icon: "⭐".repeat(vehicleInfo.stars),
            text: textParts.replace(/\s+/g, ' ').trim(),
            badgeParts: ["⭐".repeat(vehicleInfo.stars)],
        };
    }

    // 찜한 차량 (기존 FAVORITES)
    if (favorite) {
        return {
            class: "grade-premium",
            icon: "⭐".repeat(favorite.rating),
            text: favorite.note,
            badgeParts: ["⭐".repeat(favorite.rating)],
        };
    }

    // API lowPlate 기반 판별
    // 0:일반, 1:저상, 2:2층, 5:전세, 6:예약, 7:트롤리
    if (arrival.lowPlate === 5) {
        return { class: "grade-charter", icon: "🚌", text: "전세", badgeParts: ["🚌"] };
    }

    // DB에 없는 차량 (미등록)
    if (!vehicleInfo.route) {
        return { class: "grade-unknown", icon: "🚫", text: "정보없음", badgeParts: ["🚫"] };
    }

    // 차량 정보 표시: (연도.월) 차종...
    const modelShort = vehicleInfo.model;
    const prefix = vehicleInfo.route === "예비차량" ? "(예비) " : "";
    let text = `${modelShort}<br>(${vehicleInfo.year}) ${vehicleInfo.additionalMemo || ''}`.trim();

    // 배지 파트: 예비와 연.월 따로
    const badgeParts = [];
    if (vehicleInfo.route === "예비차량") {
        badgeParts.push({ text: "예비", class: "reserve" });
    }
    // 2층 배지
    if (vehicleInfo.model.includes("2층")) {
        badgeParts.push({ text: "2층", class: "double-decker" });
    }
    // 우등 배지
    if (vehicleInfo.model.includes("우등")) {
        badgeParts.push({ text: "우등", class: "premium" });
    }
    // 연도를 XX년식으로 변환
    const yearNum = parseInt(vehicleInfo.year.split('.')[0]);
    const yearText = `${yearNum}년식`;
    badgeParts.push({ text: yearText, class: `year-${2000 + yearNum}` });

    return {
        class: "grade-normal",
        icon: "",
        text: text,
        badgeParts: badgeParts,
    };
}

// 좌석 수에 따른 클래스
function getSeatClass(seats) {
    // 좌석 뱃지 색상 조건:
    // seats-unknown: -1 이하(정보 없음, 회색)
    // seats-low: 5석 이하(빨간색)
    // seats-medium: 6~10석(노란색)
    // seats-high: 11~20석(녹색)
    // seats-super-high: 21~30석(파란색)
    // seats-very-high: 31석 이상(진한 녹색)
    if (seats < 0) return "seats-unknown";
    if (seats <= 5) return "seats-low";
    if (seats <= 10) return "seats-medium";
    if (seats <= 20) return "seats-high";
    if (seats <= 30) return "seats-super-high";
    return "seats-very-high";
}

// 새로고침 - API 호출
async function refreshData() {
    const btn = document.querySelector(".refresh-btn");
    btn.classList.add("spinning");

    try {
        await fetchAllArrivals();

        // 선택한 내 버스 시간도 업데이트
        if (selectedMyBus) {
            const arrivals = LIVE_ARRIVAL_INFO["1002"] || ARRIVAL_INFO["1002"] || [];
            const myBusData = arrivals.find(a => a.plateNo === selectedMyBus.plateNo);
            if (myBusData) {
                selectedMyBus.remainMin = myBusData.remainMin;
            }
        }

        renderStations();
    } catch (e) {
        console.error("API 호출 실패:", e);
    }

    btn.classList.remove("spinning");
}

// 모든 정류장 도착정보 가져오기
async function fetchAllArrivals() {
    // 서원호텔입구 주석처리: 의왕톨게이트만 fetch
    const promises = Object.entries(STATION_IDS)
        .filter(([key]) => key !== "1001")
        .map(async ([key, stationId]) => {
            const arrivals = await fetchStationArrivals(stationId);
            LIVE_ARRIVAL_INFO[key] = arrivals;
        });
    await Promise.all(promises);

    // 테스트용 8155(예약) 데이터 inject
    if (LIVE_ARRIVAL_INFO["1002"]) {
        LIVE_ARRIVAL_INFO["1002"].push({
            busNo: "8155(예약)",
            plateNo: "99가2049",
            remainMin: 1,
            stationNm: "테스트",
            remainSeat: 10,
            lowPlate: 0,
            isDoubleDecker: false,
            isCharter: false,
            predictTimeSec: 60,
        });
        // 시간순 재정렬
        LIVE_ARRIVAL_INFO["1002"].sort((a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0));
    }
}

// 관심 노선 목록
const INTERESTED_ROUTES = [
    "3102", // 피더
    "1002",
    "1008",
    "5101",
    "8155",
    "8156", // 3형 - 남태령
    "5503", // 2형 - 무정차
    "7000",
    "7001",
    "7770",
    "7780",
    "7790",
    "7800", // 4형 - 과천경유
];

// 단일 정류장 도착정보 API 호출 (프록시 경유)
async function fetchStationArrivals(stationId) {
    const url = `${API_BASE}/api/busarrivallist?stationId=${stationId}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.response?.msgBody?.busArrivalList) {
            return transformApiData(data.response.msgBody.busArrivalList);
        }
    } catch (e) {
        console.error(`정류장 ${stationId} 조회 실패:`, e);
    }
    return [];
}

// 예약노선 단일 도착정보 API 호출 (프록시 경유)
async function fetchReservedBusArrival(stationId, routeId) {
    const url = `${API_BASE}/api/busarrivalitem?stationId=${stationId}&routeId=${routeId}&staOrder=0`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(`예약노선 ${routeId} 조회 실패:`, e);
    }
    return null;
}

// API 응답 → 앱 데이터 형태로 변환
function transformApiData(busArrivalList) {
    const arrivals = [];

    busArrivalList.forEach(bus => {
        const routeName = String(bus.routeName); // (예약) 포함된 이름 그대로 유지

        // 관심 노선만 필터링 (예약 포함)
        const baseRouteName = routeName.replace(/\(예약\)$/, "");
        if (!INTERESTED_ROUTES.includes(baseRouteName)) {
            return;
        }

        // 첫 번째 버스
        if (bus.predictTime1 !== "" && bus.predictTime1 !== undefined) {
            arrivals.push({
                busNo: routeName,
                plateNo: bus.plateNo1 || extractPlateNo(bus.plateNo1),
                remainMin: bus.predictTime1,
                stationNm: bus.stationNm1 || "",
                remainSeat: bus.remainSeatCnt1 ?? -1,
                lowPlate: bus.lowPlate1, // 0:일반, 1:저상, 2:2층, 5:전세, 6:예약, 7:트롤리
                isDoubleDecker: bus.lowPlate1 === 2,
                isCharter: bus.lowPlate1 === 5,
                predictTimeSec: bus.predictTimeSec1,
            });
        }

        // 두 번째 버스
        if (bus.predictTime2 !== "" && bus.predictTime2 !== undefined) {
            arrivals.push({
                busNo: routeName,
                plateNo: bus.plateNo2 || extractPlateNo(bus.plateNo2),
                remainMin: bus.predictTime2,
                stationNm: bus.stationNm2 || "",
                remainSeat: bus.remainSeatCnt2 ?? -1,
                lowPlate: bus.lowPlate2,
                isDoubleDecker: bus.lowPlate2 === 2,
                isCharter: bus.lowPlate2 === 5,
                predictTimeSec: bus.predictTimeSec2,
            });
        }
    });

    // 도착 시간순 정렬
    arrivals.sort((a, b) => (a.predictTimeSec || 0) - (b.predictTimeSec || 0));
    return arrivals;
}

// 차량번호 뒷4자리 추출
function extractPlateNo(plateNo) {
    if (!plateNo) return "";
    // "경기70바6071" → "6071"
    const match = plateNo.match(/\d{4}$/);
    return match ? match[0] : plateNo.slice(-4);
}

// 업데이트 시간 포맷
function formatUpdateTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    const diffHour = Math.floor(diffMin / 60);
    return `${diffHour}시간 전`;
}

// Global functions for onclick
window.selectMyBusOption = selectMyBusOption;
