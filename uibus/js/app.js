let currentMode = "commute";
let expandedStations = new Set();
let myBusStatus = "alighted"; // 'alighted', 'bus1', 'bus2'
let selectedMyBus = null; // 내가 탄 3102 차량
let showMissed = false; // 놓친 버스 펼치기

// API 설정
const STATION_IDS = {
    1002: "277103221", // 의왕톨게이트
};

// 실시간 도착정보 저장
let LIVE_ARRIVAL_INFO = {};

// API 프록시 base URL (Vercel 프록시로 고정)
const API_BASE = "https://github-io-uibus-proxy.vercel.app";

// 초기화
document.addEventListener("DOMContentLoaded", async () => {
    await fetchAllArrivals();
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
    const stations = MODES[currentMode].stations;
    const container = document.getElementById("stationList");

    container.innerHTML = stations
        .map(station => {
            const isExpanded = expandedStations.has(station.id);
            // LIVE_ARRIVAL_INFO 우선, 없으면 ARRIVAL_INFO (mock) 사용
            const arrivals =
                LIVE_ARRIVAL_INFO[station.id] || ARRIVAL_INFO[station.id] || [];
            const transferArrivals = arrivals.filter(a => a.busNo !== station.myBusRoute);

            // 폴딩 헤더 임시 주석처리: 헤더 없이 내부 내용만 표시
            return `
            <div class="station-fold">
                <!-- <div class="station-header" onclick="toggleStation('${station.id}')">
                    <span class="fold-icon">${isExpanded ? "▼" : "▶"}</span>
                    <span class="station-name">${station.name}</span>
                    <span class="station-direction">${station.direction}</span>
                    <span class="bus-count">${transferArrivals.length}대</span>
                </div> -->
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
    // LIVE_ARRIVAL_INFO 우선
    const arrivals = LIVE_ARRIVAL_INFO[station.id] || ARRIVAL_INFO[station.id] || [];

    // 3102 환승 정류장인 경우
    if (station.hasMyBus) {
        const myBusArrivals = arrivals.filter(a => a.busNo === station.myBusRoute);
        const transferArrivals = arrivals
            .filter(a => a.busNo !== station.myBusRoute)
            .sort((a, b) => a.remainMin - b.remainMin);

        return `
      ${renderMyBusSelector(myBusArrivals, station.myBusRoute)}
      ${renderTransferList(transferArrivals)}
    `;
    }

    // 일반 정류장
    return renderArrivalList(arrivals.sort((a, b) => a.remainMin - b.remainMin));
}

// 내 버스 선택기 렌더링 (3버튼)
function renderMyBusSelector(myBusArrivals, routeName) {
    // 직후/다다음 버스 정보
    const bus1 = myBusArrivals[0];
    const bus2 = myBusArrivals[1];
    // 10분 미만이면 m:ss, 아니면 분
    function formatRemain(bus) {
        if (!bus) return "없음";
        if (bus.remainMin < 10 && bus.predictTimeSec) {
            const min = Math.floor(bus.predictTimeSec / 60);
            const sec = bus.predictTimeSec % 60;
            return `${min}:${String(sec).padStart(2, "0")} (${bus.plateNo})`;
        }
        return `${bus.remainMin}분 (${bus.plateNo})`;
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
    // (가상), (임시) 등 접두어 제거
    let formatted = name.replace(/^\([^)]+\)\s*/, "");
    // 10자 초과시 ... 처리
    if (formatted.length > 10) {
        formatted = formatted.substring(0, 9) + "…";
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

    // 시간 필터링: 하차=15분, 다음차/다다음차=3102도착+10분
    let maxMinutes;
    if (myBusStatus === "alighted" || !selectedMyBus) {
        maxMinutes = 15;
    } else {
        maxMinutes = selectedMyBus.remainMin + 10;
    }
    arrivals = arrivals.filter(a => a.remainMin <= maxMinutes);

    if (arrivals.length === 0) {
        return '<div class="no-data">표시할 버스 없음 (${maxMinutes}분 이내)</div>';
    }

    // 노선별로 그룹핑 후 환승 가능한 버스 최대 2대 선택
    const byRoute = {};
    arrivals.forEach(a => {
        if (!byRoute[a.busNo]) byRoute[a.busNo] = [];
        byRoute[a.busNo].push(a);
    });

    // 각 노선에서 환승 가능한 버스 최대 2대 찾기
    let available = [];
    let close = [];
    let missed = [];

    Object.entries(byRoute).forEach(([routeNo, buses]) => {
        // 시간순 정렬
        buses.sort((a, b) => a.remainMin - b.remainMin);

        // 최대 2대 선택 (ok/close 우선)
        let selected = [];

        for (const bus of buses) {
            if (selected.length >= 2) break;
            const status = getTransferStatus(bus.remainMin);
            if (status === "ok" || status === "close") {
                selected.push({ ...bus, _status: status });
            }
        }

        // ok/close가 2대 미만이면 missed에서 채우기
        if (selected.length < 2) {
            for (const bus of buses) {
                if (selected.length >= 2) break;
                const status = getTransferStatus(bus.remainMin);
                if (
                    status === "missed" &&
                    !selected.find(s => s.plateNo === bus.plateNo)
                ) {
                    selected.push({ ...bus, _status: "missed" });
                }
            }
        }

        // 분류
        selected.forEach(bus => {
            if (bus._status === "ok") available.push(bus);
            else if (bus._status === "close") close.push(bus);
            else missed.push(bus);
        });
    });

    // 각 그룹 내 시간순 정렬
    available.sort((a, b) => a.remainMin - b.remainMin);
    close.sort((a, b) => a.remainMin - b.remainMin);
    missed.sort((a, b) => a.remainMin - b.remainMin);

    // 최대 10대 제한
    const allBuses = [...available, ...close, ...missed];
    const limitedBuses = allBuses.slice(0, 10);

    // 다시 분류
    available = limitedBuses.filter(b => b._status === "ok");
    close = limitedBuses.filter(b => b._status === "close");
    missed = limitedBuses.filter(b => b._status === "missed");

    return `
    <div class="transfer-section">
      <div class="section-title">🔄 환승 버스 <span style="font-size:0.8em;color:#888">(${maxMinutes}분 이내)</span></div>
      ${missed.length > 0 ? renderPassedSection(missed) : ""}
      <div class="arrival-list">
        ${close.map(a => renderArrivalRow(a, "close")).join("")}
        ${available.map(a => renderArrivalRow(a, "ok")).join("")}
      </div>
    </div>
  `;
}

// 환승 상태 판별
function getTransferStatus(busRemainMin) {
    // 하차완료면 전부 가능
    if (myBusStatus === "alighted" || !selectedMyBus) {
        return "ok";
    }

    const diff = busRemainMin - selectedMyBus.remainMin;

    if (diff >= 2) return "ok"; // 2분+ 여유 → 확정 가능
    if (diff >= -1) return "close"; // -1 ~ +1분 → 아슬아슬
    return "missed"; // 2분+ 먼저 옴 → 확정 놓침
}

// 통과한 버스 섹션 (폴딩, 위쪽 배치)
function renderPassedSection(passed) {
    return `
    <div class="passed-section">
      <div class="passed-header" onclick="toggleMissed()">
        <span>${showMissed ? "▼" : "▶"}</span>
        <span>통과한 버스 (${passed.length}노선)</span>
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

    // 임시: 스크롤 테스트용으로 3배 복제
    const tripleArrivals = [...arrivals, ...arrivals, ...arrivals];
    return `<div class="arrival-list">${tripleArrivals.map(a => renderArrivalRow(a, false)).join("")}</div>`;
}

// 도착 정보 행 렌더링
function renderArrivalRow(arrival, transferStatus) {
    const routeConfig = ROUTE_CONFIG[arrival.busNo] || { color: "#e91e63" }; // 미등록 노선 핀크
    const vehicleInfo = BUS_VEHICLE_INFO[arrival.plateNo] || {};
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

    // 환승 상태 표시
    let transferBadge = "";
    if ((myBusStatus === "bus1" || myBusStatus === "bus2") && selectedMyBus) {
        if (transferStatus === "ok") {
            transferBadge = '<span class="transfer-ok">✓ 가능</span>';
        } else if (transferStatus === "close") {
            transferBadge = '<span class="transfer-close">⚠️ 아슬아슬</span>';
        } else if (transferStatus === "missed") {
            transferBadge = '<span class="transfer-miss">✗ 통과</span>';
        }
    }

    // 차량 상태 판별
    let vehicleStatus = getVehicleStatus(arrival, vehicleInfo, favorite);

    // 좌석 표시
    const seatDisplay = arrival.remainSeat < 0 ? "-" : arrival.remainSeat + "석";
    const seatClass = getSeatClass(arrival.remainSeat);

    // 노선 타입 태그
    const routeTag = routeConfig.tag
        ? `<span class="route-tag">${routeConfig.tag}</span>`
        : "";

    // 정류장 이름 표시
    const stationDisplay = `<span class="station-nm">${formatStationNm(arrival.stationNm)}</span>`;

    // 시간 표시 (9분 이하면 초단위)
    let timeDisplay;
    if (arrival.remainMin <= 9 && arrival.predictTimeSec) {
        const min = Math.floor(arrival.predictTimeSec / 60);
        const sec = arrival.predictTimeSec % 60;
        timeDisplay = `${min}:${String(sec).padStart(2, "0")}`;
    } else {
        timeDisplay = `${arrival.remainMin}분`;
    }

    // 경합 클래스
    const racingClass = isRacing ? "racing" : "";

    return `
    <div class="arrival-row ${vehicleStatus.class} ${racingClass}">
      <span class="bus-number" style="background-color: ${routeConfig.color}">${arrival.busNo}</span>
      ${routeTag}
      <span class="remain-time ${isSoon ? "soon" : ""}">${timeDisplay}</span>
      ${stationDisplay}
      <span class="seat-badge ${seatClass}">${seatDisplay}</span>
      ${transferBadge}
      <span class="vehicle-status">${vehicleStatus.icon} ${vehicleStatus.text}</span>
    </div>
  `;
}

// 차량 상태 판별
function getVehicleStatus(arrival, vehicleInfo, favorite) {
    // 찜한 차량
    if (favorite) {
        return {
            class: "grade-premium",
            icon: "⭐".repeat(favorite.rating),
            text: favorite.note,
        };
    }

    // API lowPlate 기반 판별
    // 0:일반, 1:저상, 2:2층, 5:전세, 6:예약, 7:트롤리
    if (arrival.lowPlate === 5) {
        return { class: "grade-charter", icon: "🚌", text: "전세" };
    }

    // DB에 없는 차량 (미등록)
    if (!vehicleInfo.route) {
        return { class: "grade-unknown", icon: "❓", text: "미등록" };
    }

    // 다른 노선 차량
    if (vehicleInfo.route !== arrival.busNo) {
        return { class: "grade-borrowed", icon: "🔄", text: `${vehicleInfo.route}차` };
    }

    // 연식 계산 (현재 26년 기준)
    const yearNum = parseFloat(vehicleInfo.year);
    if (yearNum && yearNum < 20) {
        // 5년 이상
        return {
            class: "grade-old",
            icon: "💀",
            text: `${vehicleInfo.year} ${vehicleInfo.model}`,
        };
    }

    // 일반 차량
    return {
        class: "grade-normal",
        icon: "",
        text: `${vehicleInfo.year} ${vehicleInfo.model}`,
    };
}

// 좌석 수에 따른 클래스
function getSeatClass(seats) {
    // 좌석 뱃지 색상 조건:
    // seats-unknown: -1 이하(정보 없음, 회색)
    // seats-low: 5석 이하(빨간색)
    // seats-medium: 6~10석(노란색)
    // seats-high: 11석 이상(녹색)
    if (seats < 0) return "seats-unknown";
    if (seats <= 5) return "seats-low";
    if (seats <= 10) return "seats-medium";
    return "seats-high";
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
        const routeName = String(bus.routeName).replace(/\(예약\)$/, "");

        // 관심 노선만 필터링
        if (!INTERESTED_ROUTES.includes(routeName)) {
            return;
        }

        // 첫 번째 버스
        if (bus.predictTime1 !== "" && bus.predictTime1 !== undefined) {
            arrivals.push({
                busNo: routeName,
                plateNo: extractPlateNo(bus.plateNo1),
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
                plateNo: extractPlateNo(bus.plateNo2),
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
    arrivals.sort((a, b) => a.remainMin - b.remainMin);
    return arrivals;
}

// 차량번호 뒷4자리 추출
function extractPlateNo(plateNo) {
    if (!plateNo) return "";
    // "경기70바6071" → "6071"
    const match = plateNo.match(/\d{4}$/);
    return match ? match[0] : plateNo.slice(-4);
}
