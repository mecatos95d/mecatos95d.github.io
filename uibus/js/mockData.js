// 노선 타입 설정
// 1형: 예약제 급행, 2형: 무정차, 3형: 남태령만 정차, 4형: 과천/남태령 정차
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
    3102: { type: 0, color: "#2196f3", tag: "피더" }, // 환승용 - 파란색
};

const ROUTE_TYPE_NAMES = {
    0: "피더",
    1: "급행(예약)",
    2: "무정차",
    3: "남태령",
    4: "과천경유",
};

// 모드 설정
const MODES = {
    commute: {
        name: "출근",
        stations: [
            {
                id: "1002", // 의왕톨게이트 API stationId: 277103221
                name: "의왕톨게이트",
                direction: "서울 방면",
                hasMyBus: true, // 3102 환승 기능
                isTransfer: true,
                myBusRoute: "3102",
            },
            // {
            //     id: "1001",  // 서원호텔입구 API stationId: 226000039
            //     name: "서원호텔입구",
            //     direction: "서울 방면"
            // },
        ],
    },
    offwork: {
        name: "퇴근",
        stations: [
            { id: "sadang", name: "사당역", direction: "의왕 방면" },
            { id: "uiwang_off", name: "의왕톨게이트", direction: "수원 방면" },
        ],
    },
};

// 버스 차량 정보 DB (크롤링 데이터)
const BUS_VEHICLE_INFO = {
    // 정규 차량
    1234: { route: "1002", year: "19.5", model: "그린시티", fuel: "디젤" },
    1235: { route: "1002", year: "21.3", model: "유니버스", fuel: "CNG" },
    2001: { route: "8155", year: "22.1", model: "유니버스", fuel: "CNG" },
    2002: { route: "8156", year: "20.8", model: "그랜버드", fuel: "디젤" },
    3001: { route: "5503", year: "23.5", model: "일렉시티", fuel: "전기" },
    4001: { route: "7000", year: "18.3", model: "BS110", fuel: "디젤" },
    4002: { route: "7000", year: "17.1", model: "BS106", fuel: "디젤" },
    5001: { route: "3102", year: "20.5", model: "그린시티", fuel: "CNG" },
    5002: { route: "3102", year: "21.2", model: "그린시티", fuel: "CNG" },
};

// 찜한 차량 (좋은 전세차 등)
const FAVORITES = {
    9001: { note: "우등, USB충전", rating: 2 },
    9002: { note: "신차급, 넓은좌석", rating: 2 },
    8888: { note: "쾌적함", rating: 1 },
};

// 정류장별 버스 도착 정보 (API 대체 mock)
const ARRIVAL_INFO = {
    // 출근 - 의왕톨게이트 (환승 정류장)
    uiwang: [
        // 3102 (내가 탄 버스)
        {
            busNo: "3102",
            remainMin: 5,
            remainSeat: -1,
            plateNo: "5001",
            stationNm: "포일사거리",
            lowPlate: 0,
        },
        {
            busNo: "3102",
            remainMin: 12,
            remainSeat: -1,
            plateNo: "5002",
            stationNm: "서원호텔입구",
            lowPlate: 0,
        },
        // 환승 버스들
        {
            busNo: "1002",
            remainMin: 3,
            remainSeat: 8,
            plateNo: "1234",
            stationNm: "청계사입구",
            lowPlate: 0,
        },
        {
            busNo: "5503",
            remainMin: 4,
            remainSeat: 22,
            plateNo: "3001",
            stationNm: "안양",
            lowPlate: 1,
        },
        {
            busNo: "8155",
            remainMin: 7,
            remainSeat: 15,
            plateNo: "2001",
            stationNm: "학의JC",
            lowPlate: 0,
        },
        {
            busNo: "1002",
            remainMin: 8,
            remainSeat: 5,
            plateNo: "9001",
            stationNm: "청계휴게소",
            lowPlate: 5,
        }, // 전세차!
        {
            busNo: "7000",
            remainMin: 6,
            remainSeat: 12,
            plateNo: "4001",
            stationNm: "갈뫼사거리",
            lowPlate: 0,
        },
        {
            busNo: "7000",
            remainMin: 18,
            remainSeat: 35,
            plateNo: "4002",
            stationNm: "광교",
            lowPlate: 0,
        },
    ],
    // 출근 - 서원호텔입구 (3102 탑승)
    seowon: [
        {
            busNo: "3102",
            remainMin: 2,
            remainSeat: -1,
            plateNo: "5001",
            stationNm: "백운호수",
            lowPlate: 0,
        },
        {
            busNo: "3102",
            remainMin: 9,
            remainSeat: -1,
            plateNo: "5002",
            stationNm: "포일사거리",
            lowPlate: 0,
        },
    ],
    // 퇴근 - 사당역
    sadang: [
        {
            busNo: "1002",
            remainMin: 2,
            remainSeat: 5,
            plateNo: "1235",
            stationNm: "남태령역",
            lowPlate: 0,
        },
        {
            busNo: "5503",
            remainMin: 5,
            remainSeat: 18,
            plateNo: "3001",
            stationNm: "과천",
            lowPlate: 1,
        },
        {
            busNo: "8156",
            remainMin: 8,
            remainSeat: 12,
            plateNo: "2002",
            stationNm: "과천정부청사",
            lowPlate: 0,
        },
        {
            busNo: "7000",
            remainMin: 10,
            remainSeat: 28,
            plateNo: "4001",
            stationNm: "남태령역",
            lowPlate: 0,
        },
        {
            busNo: "8155(예약)",
            remainMin: 12,
            remainSeat: 3,
            plateNo: "2001",
            stationNm: "과천정부청사",
            lowPlate: 0,
        },
    ],
    // 퇴근 - 의왕톨게이트
    uiwang_off: [
        {
            busNo: "3102",
            remainMin: 4,
            remainSeat: -1,
            plateNo: "5002",
            stationNm: "포일사거리",
            lowPlate: 0,
        },
        {
            busNo: "7000",
            remainMin: 6,
            remainSeat: 22,
            plateNo: "4002",
            stationNm: "사당역",
            lowPlate: 0,
        },
    ],
};
