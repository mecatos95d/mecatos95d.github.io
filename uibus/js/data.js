// 노선 타입 설정
// 1형: 예약제 급행, 2형: 무정차, 3형: 남태령만 정차, 4형: 과천/남태령 정차
import { BUS_VEHICLE_INFO } from "./bus.js";

const ROUTE_CONFIG = {
    "8155(예약)": { type: 1, color: "#ff9800", tag: "예약" }, // 주황색
    "8156(예약)": { type: 1, color: "#ff9800", tag: "예약" },
    5503: { type: 2, color: "#ff9800" }, // 무정차 - 주황색
    1002: { type: 3, color: "#ee2737" }, // 남태령 - 공식 빨간색
    1008: { type: 3, color: "#ee2737" },
    5101: { type: 3, color: "#ee2737" },
    8155: { type: 3, color: "#ee2737" },
    8156: { type: 3, color: "#ee2737" },
    7000: { type: 4, color: "#888" }, // 과천경유 - 회색
    7001: { type: 4, color: "#888" },
    7770: { type: 4, color: "#888" },
    7780: { type: 4, color: "#888" },
    7790: { type: 4, color: "#888" },
    7800: { type: 4, color: "#888" },
    3102: { type: 0, color: "#2196f3" }, // 환승용 - 파란색
};

const ROUTE_TYPE_NAMES = {
    0: "피더",
    1: "급행(예약)",
    2: "무정차",
    3: "남태령",
    4: "과천경유",
};

const MODES = {
    commute: {
        name: "출근",
        stations: [
            {
                id: "1002",
                name: "의왕톨게이트",
                direction: "서울 방면",
                hasMyBus: true,
                isTransfer: true,
                myBusRoute: "3102",
            },
        ],
    },
};

export { ROUTE_CONFIG, ROUTE_TYPE_NAMES, MODES, BUS_VEHICLE_INFO };

const FAVORITES = {
    9001: { note: "우등, USB충전", rating: 2 },
    9002: { note: "신차급, 넓은좌석", rating: 2 },
    8888: { note: "쾌적함", rating: 1 },
};

// 초기 ARRIVAL_INFO는 빈 객체로 두어 앱 시작 시 가짜 도착 정보가 보이지 않게 합니다.
const ARRIVAL_INFO = {};

export { ARRIVAL_INFO, FAVORITES };
