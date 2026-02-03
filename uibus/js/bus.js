// 버스 차량 정보 DB (크롤링 데이터)
const BUS_VEHICLE_INFO = {
    "76a1130": {
        "route": "1002",
        "year": "17.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.7 면허등록, 용남고속 출신, 구.경기 70사 6553호"
    },
    "76a1131": {
        "route": "1002",
        "year": "17.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.7 면허등록, 용남고속 출신, 구.경기 70사 6554호"
    },
    "76a1194": {
        "route": "1002",
        "year": "15.10",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.11 면허등록; 예비"
    },
    "76a4651": {
        "route": "1002",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6711호"
    },
    "76a4653": {
        "route": "1002",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6713호"
    },
    "76a4654": {
        "route": "1002",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6714호"
    },
    "76a4697": {
        "route": "1002",
        "year": "22.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "2022.12 면허등록, 구.경기 76아 4680호"
    },
    "76a1122": {
        "route": "1008",
        "year": "17.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형"
    },
    "76a1123": {
        "route": "1008",
        "year": "17.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형"
    },
    "76a1132": {
        "route": "1008",
        "year": "17.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.7 면허등록, 용남고속 출신, 구.경기 70사 6555호"
    },
    "76a4649": {
        "route": "1008",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6709호"
    },
    "76a4650": {
        "route": "1008",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6710호"
    },
    "76a4652": {
        "route": "1008",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6712호"
    },
    "73ba1005": {
        "route": "3102",
        "year": "17.5",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "2017.6 면허등록; 예비"
    },
    "73ba1167": {
        "route": "3102",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "예비"
    },
    "73ba1310": {
        "route": "3102",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록; 평일에만 운행"
    },
    "73ba1320": {
        "route": "3102",
        "year": "17.9",
        "model": "MAN 라이온스 시티 더블데커 2층버스 디젤",
        "additionalMemo": "2017.10 면허등록"
    },
    "73ba1527": {
        "route": "3102",
        "year": "16.8",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "예비"
    },
    "73ba1557": {
        "route": "3102",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록; 평일에만 운행"
    },
    "73ba1590": {
        "route": "3102",
        "year": "18.12",
        "model": "MAN 라이온스 시티 더블데커 2층버스 디젤",
        "additionalMemo": "2019.8 면허등록"
    },
    "73ba1593": {
        "route": "3102",
        "year": "18.12",
        "model": "MAN 라이온스 시티 더블데커 2층버스 디젤",
        "additionalMemo": "2019.8 면허등록"
    },
    "73ba1594": {
        "route": "3102",
        "year": "19.1",
        "model": "MAN 라이온스 시티 더블데커 2층버스 디젤",
        "additionalMemo": "2019.8 면허등록"
    },
    "73ba1600": {
        "route": "3102",
        "year": "19.8",
        "model": "뉴프리미엄 유니버스 엘레강스 CNG",
        "additionalMemo": "2019.9 면허등록"
    },
    "73ba1601": {
        "route": "3102",
        "year": "19.8",
        "model": "뉴프리미엄 유니버스 엘레강스 CNG",
        "additionalMemo": "2019.10 면허등록"
    },
    "73ba1602": {
        "route": "3102",
        "year": "19.8",
        "model": "뉴프리미엄 유니버스 엘레강스 CNG",
        "additionalMemo": "2019.10 면허등록"
    },
    "73ba1607": {
        "route": "3102",
        "year": "19.8",
        "model": "뉴프리미엄 유니버스 엘레강스 CNG",
        "additionalMemo": "2019.9 면허등록"
    },
    "73ba1727": {
        "route": "3102",
        "year": "22.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.1 면허등록"
    },
    "76a5818": {
        "route": "5101",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a5819": {
        "route": "5101",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "76a5820": {
        "route": "5101",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "76a5821": {
        "route": "5101",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "76a5822": {
        "route": "5101",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "76a5823": {
        "route": "5101",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "76a5824": {
        "route": "5101",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a5825": {
        "route": "5101",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a5826": {
        "route": "5101",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a5827": {
        "route": "5101",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a4655": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4656": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4657": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4658": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4659": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4660": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4661": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2020년 9월식으로 적힘"
    },
    "76a4662": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4663": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4664": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4665": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4666": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4667": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "76a4668": {
        "route": "5101",
        "year": "20.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "72a4020": {
        "route": "5503",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록; 경기도 유니버스 FCEV 28호"
    },
    "72a4021": {
        "route": "5503",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록; 경기도 유니버스 FCEV 29호"
    },
    "72a4022": {
        "route": "5503",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록; 경기도 유니버스 FCEV 30호"
    },
    "72a4023": {
        "route": "5503",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록; 경기도 유니버스 FCEV 31호"
    },
    "72a4024": {
        "route": "5503",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록; 경기도 유니버스 FCEV 32호"
    },
    "72a4025": {
        "route": "5503",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 엘레강스 F/L FCEV",
        "additionalMemo": "2025.3 면허등록, 패찰에는 2025년 1월식으로 적힘; 경기도 유니버스 FCEV 33호"
    },
    "70ba3713": {
        "route": "7000",
        "year": "17.4",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.5 면허등록"
    },
    "70ba5649": {
        "route": "7000",
        "year": "16.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2016.7 면허등록"
    },
    "70ba5650": {
        "route": "7000",
        "year": "16.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2016.7 면허등록"
    },
    "70ba5651": {
        "route": "7000",
        "year": "16.6",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2016.7 면허등록"
    },
    "70ba5695": {
        "route": "7000",
        "year": "17.5",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형"
    },
    "70ba5696": {
        "route": "7000",
        "year": "17.5",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형"
    },
    "70ba5766": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6715호"
    },
    "70ba5767": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6716호"
    },
    "70ba5768": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6717호"
    },
    "70ba5769": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6706호"
    },
    "70ba5770": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6708호"
    },
    "70ba5771": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6748호"
    },
    "70ba5772": {
        "route": "7000",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6749호"
    },
    "70ba5926": {
        "route": "7000",
        "year": "23.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.11 면허등록"
    },
    "70ba3693": {
        "route": "7001",
        "year": "18.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2018.4 면허등록"
    },
    "70ba3695": {
        "route": "7001",
        "year": "18.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2018.4 면허등록"
    },
    "70ba5515": {
        "route": "7001",
        "year": "15.10",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 디젤",
        "additionalMemo": "용남고속 시외부 출신, 구.경기 70사 6543호"
    },
    "70ba5699": {
        "route": "7001",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.6 면허등록"
    },
    "70ba5700": {
        "route": "7001",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.6 면허등록"
    },
    "70ba5701": {
        "route": "7001",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.6 면허등록"
    },
    "70ba5774": {
        "route": "7001",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6751호"
    },
    "70ba5775": {
        "route": "7001",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6752호"
    },
    "70ba5776": {
        "route": "7001",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6753호"
    },
    "70ba5777": {
        "route": "7001",
        "year": "18.7",
        "model": "뉴프리미엄 유니버스 익스프레스 노블 디젤",
        "additionalMemo": "우등 → 일반 개조; 용남공항리무진 출신, 구.경기 70사 6754호"
    },
    "70ba5906": {
        "route": "7001",
        "year": "21.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.12 면허등록"
    },
    "70ba5907": {
        "route": "7001",
        "year": "22.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.12 면허등록"
    },
    "70ba5927": {
        "route": "7001",
        "year": "23.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.11 면허등록"
    },
    "70sa1139": {
        "route": "7770",
        "year": "19.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2019.6 면허등록, 용남고속 취소분"
    },
    "70sa1152": {
        "route": "7770",
        "year": "22.7",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.8 면허등록, 패찰에는 2022년 6월식으로 적힘"
    },
    "70sa1153": {
        "route": "7770",
        "year": "19.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2019.6 면허등록, 용남고속 취소분"
    },
    "70sa1168": {
        "route": "7770",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1169": {
        "route": "7770",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1173": {
        "route": "7770",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1181": {
        "route": "7770",
        "year": "23.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.11 면허등록"
    },
    "70sa1183": {
        "route": "7770",
        "year": "22.6",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.8 면허등록"
    },
    "70sa1185": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.10 면허등록"
    },
    "70sa1189": {
        "route": "7770",
        "year": "18.4",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "현대항공여행사 출신, 구.경기 76아 6752호"
    },
    "70sa1192": {
        "route": "7770",
        "year": "21.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2021년 10월식으로 적힘"
    },
    "70sa1612": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.10 면허등록"
    },
    "70sa1636": {
        "route": "7770",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1637": {
        "route": "7770",
        "year": "22.7",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.8 면허등록, 패찰에는 2022년 6월식으로 적힘"
    },
    "70sa1650": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.11 면허등록"
    },
    "70sa1651": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.11 면허등록"
    },
    "70sa1652": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.11 면허등록"
    },
    "70sa1653": {
        "route": "7770",
        "year": "22.9",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2022.11 면허등록"
    },
    "70sa1668": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1669": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1670": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1671": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1672": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1673": {
        "route": "7770",
        "year": "23.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1686": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1687": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1688": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1689": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1690": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1691": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1692": {
        "route": "7770",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1702": {
        "route": "7770",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "70sa1703": {
        "route": "7770",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "70sa1704": {
        "route": "7770",
        "year": "25.3",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.4 면허등록"
    },
    "70sa1705": {
        "route": "7770",
        "year": "25.3",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.4 면허등록"
    },
    "70sa1107": {
        "route": "7780",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록"
    },
    "70sa1110": {
        "route": "7780",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록"
    },
    "70sa1118": {
        "route": "7780",
        "year": "23.6",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.9 면허등록"
    },
    "70sa1124": {
        "route": "7780",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록"
    },
    "70sa1131": {
        "route": "7780",
        "year": "23.6",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.9 면허등록"
    },
    "70sa1164": {
        "route": "7780",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록"
    },
    "70sa1165": {
        "route": "7780",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록"
    },
    "70sa1193": {
        "route": "7780",
        "year": "21.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.11 면허등록"
    },
    "70sa1194": {
        "route": "7780",
        "year": "21.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.11 면허등록"
    },
    "70sa1638": {
        "route": "7780",
        "year": "21.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG"
    },
    "70sa1643": {
        "route": "7780",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1644": {
        "route": "7780",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1645": {
        "route": "7780",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1674": {
        "route": "7780",
        "year": "23.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1675": {
        "route": "7780",
        "year": "23.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1696": {
        "route": "7780",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "70sa1697": {
        "route": "7780",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "70sa1698": {
        "route": "7780",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "70sa1699": {
        "route": "7780",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "70sa1700": {
        "route": "7780",
        "year": "25.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.2 면허등록"
    },
    "70sa1701": {
        "route": "7780",
        "year": "25.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2025년 1월식으로 적힘"
    },
    "76a4541": {
        "route": "7790",
        "year": "22.3",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.10 면허등록"
    },
    "76a4542": {
        "route": "7790",
        "year": "22.3",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.10 면허등록"
    },
    "76a4543": {
        "route": "7790",
        "year": "22.3",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.10 면허등록"
    },
    "76a4544": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4545": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4546": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.12 면허등록"
    },
    "76a4547": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.12 면허등록"
    },
    "76a4548": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.12 면허등록"
    },
    "76a4549": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.12 면허등록"
    },
    "76a4550": {
        "route": "7790",
        "year": "22.11",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2022.12 면허등록"
    },
    "76a4555": {
        "route": "7790",
        "year": "24.4",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2024.5 면허등록"
    },
    "76a4556": {
        "route": "7790",
        "year": "24.4",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2024.5 면허등록"
    },
    "70sa1113": {
        "route": "7800",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록"
    },
    "70sa1132": {
        "route": "7800",
        "year": "21.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.11 면허등록"
    },
    "70sa1145": {
        "route": "7800",
        "year": "23.6",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2023.9 면허등록"
    },
    "70sa1639": {
        "route": "7800",
        "year": "21.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.2 면허등록"
    },
    "70sa1640": {
        "route": "7800",
        "year": "21.1",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.2 면허등록"
    },
    "70sa1641": {
        "route": "7800",
        "year": "21.2",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "패찰에는 2021년 1월식으로 적힘"
    },
    "70sa1646": {
        "route": "7800",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1647": {
        "route": "7800",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1648": {
        "route": "7800",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1649": {
        "route": "7800",
        "year": "21.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1664": {
        "route": "7800",
        "year": "19.2",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "수원 용남고속 출신, 구.경기 70사 6577호 → 구.경기 76아 4537호"
    },
    "70sa1665": {
        "route": "7800",
        "year": "19.2",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "수원 용남고속 출신, 구.경기 70사 6578호 → 구.경기 76아 4538호"
    },
    "70sa1666": {
        "route": "7800",
        "year": "19.2",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "수원 용남고속 출신, 구.경기 70사 6579호 → 구.경기 76아 4539호"
    },
    "70sa1676": {
        "route": "7800",
        "year": "23.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1677": {
        "route": "7800",
        "year": "23.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1678": {
        "route": "7800",
        "year": "23.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1695": {
        "route": "7800",
        "year": "24.8",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2024.9 면허등록"
    },
    "70sa1709": {
        "route": "7800",
        "year": "25.5",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.6 면허등록"
    },
    "70sa1710": {
        "route": "7800",
        "year": "25.5",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2025.6 면허등록"
    },
    "70sa1712": {
        "route": "7800",
        "year": "25.9",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2025.10 면허등록"
    },
    "70sa1713": {
        "route": "7800",
        "year": "25.9",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2025.10 면허등록"
    },
    "70sa1714": {
        "route": "7800",
        "year": "25.9",
        "model": "일렉시티 2층버스 EV",
        "additionalMemo": "2025.10 면허등록"
    },
    "70sa1720": {
        "route": "7800",
        "year": "25.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L FCEV",
        "additionalMemo": "패찰에는 2025년 11월식으로 적힘; 경기도 유니버스 FCEV 97호"
    },
    "70sa1721": {
        "route": "7800",
        "year": "25.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L FCEV",
        "additionalMemo": "패찰에는 2025년 11월식으로 적힘; 경기도 유니버스 FCEV 93호"
    },
    "70sa1722": {
        "route": "7800",
        "year": "25.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L FCEV",
        "additionalMemo": "패찰에는 2025년 11월식으로 적힘; 경기도 유니버스 FCEV 100호"
    },
    "70sa1723": {
        "route": "7800",
        "year": "25.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L FCEV",
        "additionalMemo": "패찰에는 2025년 11월식으로 적힘; 경기도 유니버스 FCEV 98호"
    },
    "70sa1724": {
        "route": "7800",
        "year": "25.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L FCEV",
        "additionalMemo": "패찰에는 2025년 11월식으로 적힘; 경기도 유니버스 FCEV 94호"
    },
    "76a4562": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4563": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4564": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤"
    },
    "76a4565": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4566": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4567": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4568": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4569": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4570": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4571": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "2025.12 면허등록"
    },
    "76a4572": {
        "route": "8155",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "2025.12 면허등록"
    },
    "76a4573": {
        "route": "8155",
        "year": "25.12",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4574": {
        "route": "8155",
        "year": "25.12",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4575": {
        "route": "8155",
        "year": "25.12",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4576": {
        "route": "8155",
        "year": "25.12",
        "model": "일렉시티 2층버스 EV"
    },
    "76a4577": {
        "route": "8155",
        "year": "25.12",
        "model": "일렉시티 2층버스 EV"
    },
    "70sa1619": {
        "route": "8156",
        "year": "19.12",
        "model": "뉴프리미엄 유니버스 엘레강스 디젤 전비형",
        "additionalMemo": "구.경기 76아 1291호"
    },
    "70sa1620": {
        "route": "8156",
        "year": "19.12",
        "model": "뉴프리미엄 유니버스 엘레강스 디젤 전비형",
        "additionalMemo": "구.경기 76아 1292호"
    },
    "76a4557": {
        "route": "8156",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4558": {
        "route": "8156",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4559": {
        "route": "8156",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4560": {
        "route": "8156",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "76a4561": {
        "route": "8156",
        "year": "25.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L 디젤",
        "additionalMemo": "패찰에는 2025년 10월식으로 적힘"
    },
    "70sa1147": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "호매실영업소 예비"
    },
    "70sa1176": {
        "route": "예비차량",
        "year": "19.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2019.6 면허등록, 수원 용남고속 취소분"
    },
    "70sa1187": {
        "route": "예비차량",
        "year": "18.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "화성 여산관광 출신, 구.경기 76아 3764호"
    },
    "70sa1516": {
        "route": "예비차량",
        "year": "15.5",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.6 면허등록"
    },
    "70sa1521": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형"
    },
    "70sa1654": {
        "route": "예비차량",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.6 면허등록, 현대항공여행사 출신, 구.경기 76자 8606호; 서둔동 예비"
    },
    "70sa1655": {
        "route": "예비차량",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.6 면허등록, 현대항공여행사 출신, 구.경기 76자 3033호; 서둔동 예비"
    },
    "70sa1662": {
        "route": "예비차량",
        "year": "19.2",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "수원 용남고속 출신, 구.경기 70사 6575호 → 구.경기 76아 4535호"
    },
    "70sa1663": {
        "route": "예비차량",
        "year": "19.2",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "수원 용남고속 출신, 구.경기 70사 6576호 → 구.경기 76아 4536호"
    },
    "76a1259": {
        "route": "예비차량",
        "year": "16.3",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2016.4 면허등록"
    },
    "76a1262": {
        "route": "예비차량",
        "year": "17.4",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.5 면허등록"
    },
    "76a1263": {
        "route": "예비차량",
        "year": "17.4",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.5 면허등록"
    },
    "76a1264": {
        "route": "예비차량",
        "year": "17.4",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.5 면허등록"
    },
    "76a1265": {
        "route": "예비차량",
        "year": "17.4",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2017.5 면허등록"
    },
    "76a1293": {
        "route": "예비차량",
        "year": "17.1",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.2 면허등록, 현대항공여행사 출신, 구.경기 78아 7097호"
    },
    "76a1294": {
        "route": "예비차량",
        "year": "17.1",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.2 면허등록, 현대항공여행사 출신, 구.경기 78아 7098호"
    },
    "76a1295": {
        "route": "예비차량",
        "year": "17.1",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.2 면허등록, 여산관광 출신, 구.경기 76아 8558호; 호매실영업소 예비"
    },
    "76a1296": {
        "route": "예비차량",
        "year": "17.1",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2017.2 면허등록, 여산관광 출신, 구.경기 76아 8562호; 호매실영업소 예비"
    },
    "76a1297": {
        "route": "예비차량",
        "year": "17.3",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "여산관광 출신, 구.경기 76아 9337호"
    },
    "76a1298": {
        "route": "예비차량",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "여산관광 출신, 구.경기 76아 9336호"
    },
    "76a4513": {
        "route": "예비차량",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "화성 여산관광 출신, 구.경기 76아 3801호"
    },
    "76a4514": {
        "route": "예비차량",
        "year": "17.5",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "화성 여산관광 출신, 구.경기 76아 9329호"
    },
    "70sa1114": {
        "route": "예비차량",
        "year": "18.1",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2018.2 면허등록; 7800번 차량"
    },
    "70sa1119": {
        "route": "예비차량",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록, 패찰에는 2023년 10월식으로 적힘; 7800번 차량"
    },
    "70sa1162": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "예비차량, 차량화재로 인해 휴차"
    },
    "70sa1513": {
        "route": "예비차량",
        "year": "15.2",
        "model": "뉴프리미엄 유니버스 익스프레스 프라임 디젤",
        "additionalMemo": "8000번 차량"
    },
    "70sa1683": {
        "route": "예비차량",
        "year": "23.11",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.12 면허등록; 3000번 차량, 사고로 인해 휴차"
    },
    "70sa1693": {
        "route": "예비차량",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "7800번 차량"
    },
    "70sa1694": {
        "route": "예비차량",
        "year": "23.12",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "7800번 차량"
    },
    "76a1283": {
        "route": "예비차량",
        "year": "19.6",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2020.10 면허등록; 8155번 차량"
    },
    "76a4517": {
        "route": "예비차량",
        "year": "19.6",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2020.10 면허등록; 8155번 차량"
    },
    "76a4518": {
        "route": "예비차량",
        "year": "19.6",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2020.10 면허등록; 8155번 차량"
    },
    "76a4519": {
        "route": "예비차량",
        "year": "19.6",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2020.10 면허등록; 8155번 차량"
    },
    "76a4520": {
        "route": "예비차량",
        "year": "19.6",
        "model": "MAN 라이온스 더블데커 디젤 2층버스",
        "additionalMemo": "2020.10 면허등록; 8155번 차량"
    },
    "70ba5289": {
        "route": "예비차량",
        "year": "18.5",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "수원여객 출신, 구.경기 70바 1437호; 서부영업소 예비"
    },
    "70ba5505": {
        "route": "예비차량",
        "year": "18.6",
        "model": "뉴슈퍼에어로시티 F/L CNG 개선형",
        "additionalMemo": "2018.7 면허등록, 수원여객 출신, 구.경기 70바 1616호"
    },
    "70ba5582": {
        "route": "예비차량",
        "year": "15.1",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.2 면허등록; 남부영업소 예비"
    },
    "70ba5583": {
        "route": "예비차량",
        "year": "15.1",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.2 면허등록; 남부영업소 예비"
    },
    "70ba5610": {
        "route": "예비차량",
        "year": "15.6",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2015.7 면허등록; 남부영업소 예비"
    },
    "70ba5611": {
        "route": "예비차량",
        "year": "15.6",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2015.7 면허등록; 남부영업소 예비"
    },
    "70ba5612": {
        "route": "예비차량",
        "year": "15.6",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2015.7 면허등록; 남부영업소 예비"
    },
    "70ba5613": {
        "route": "예비차량",
        "year": "15.6",
        "model": "뉴프리미엄 유니버스 스페이스 럭셔리 CNG",
        "additionalMemo": "2015.7 면허등록; 남부영업소 예비"
    },
    "70ba5721": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스",
        "additionalMemo": "남부영업소 예비"
    },
    "70ba5722": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스",
        "additionalMemo": "서부영업소 예비"
    },
    "70ba5725": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스",
        "additionalMemo": "서부영업소 예비"
    },
    "70ba5726": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스",
        "additionalMemo": "남부영업소 예비"
    },
    "70ba5727": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스"
    },
    "70ba5728": {
        "route": "예비차량",
        "year": "18.4",
        "model": "뉴슈퍼에어로시티 F/L CNG 좌석형버스",
        "additionalMemo": "남부영업소 예비"
    },
    "70ba6054": {
        "route": "예비차량",
        "year": "19.6",
        "model": "뉴 E-화이버드 EV",
        "additionalMemo": "2019.9 면허등록, 수원여객 출신, 구.경기 70바 1876호; 전국 최초의 뉴 E-화이버드; 동부영업소 예비"
    },
    "70ba6055": {
        "route": "예비차량",
        "year": "19.7",
        "model": "뉴 E-화이버드 EV",
        "additionalMemo": "2019.9 면허등록, 수원여객 출신, 구.경기 70바 1879호; 전국 최초의 뉴 E-화이버드"
    },
    "70ba6057": {
        "route": "예비차량",
        "year": "19.7",
        "model": "뉴 E-화이버드 EV",
        "additionalMemo": "2019.9 면허등록, 수원여객 출신, 구.경기 70바 1881호; 전국 최초의 뉴 E-화이버드; 동부영업소 예비"
    },
    "70ba6061": {
        "route": "예비차량",
        "year": "19.7",
        "model": "뉴 E-화이버드 EV",
        "additionalMemo": "2019.10 면허등록, 수원여객 출신, 구.경기 70바 1898호; 본사 예비"
    },
    "70ba6059": {
        "route": "예비차량",
        "year": "19.7",
        "model": "뉴 E-화이버드 EV",
        "additionalMemo": "2019.9 면허등록, 수원여객 출신, 구.경기 70바 1884호; 전국 최초의 뉴 E-화이버드; 92번 전용예비차량"
    },
    "76a1032": {
        "route": "예비차량",
        "year": "17.6",
        "model": "그린시티 디젤",
        "additionalMemo": "2017.7 면허등록, 경진여객 출신"
    },
    "76a1033": {
        "route": "예비차량",
        "year": "17.6",
        "model": "그린시티 디젤",
        "additionalMemo": "2017.7 면허등록, 경진여객 출신; 조암영업소 예비"
    },
    "76a1116": {
        "route": "예비차량",
        "year": "20.1",
        "model": "그린시티 디젤 개선형",
        "additionalMemo": "2020.2 면허등록, 패찰에는 2019년으로 적힘; 조암영업소 예비"
    },
    "76a1120": {
        "route": "예비차량",
        "year": "17.6",
        "model": "그린시티 디젤"
    },
    "76a1124": {
        "route": "예비차량",
        "year": "17.12",
        "model": "그린시티 디젤",
        "additionalMemo": "2018.1 면허등록"
    },
    "76a1192": {
        "route": "예비차량",
        "year": "15.10",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.11 면허등록"
    },
    "76a1193": {
        "route": "예비차량",
        "year": "15.10",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.11 면허등록"
    },
    "76a1195": {
        "route": "예비차량",
        "year": "15.10",
        "model": "유니버스 스페이스 엘레강스 디젤 전비형",
        "additionalMemo": "2015.11 면허등록"
    },
    "76a1288": {
        "route": "예비차량",
        "year": "18.4",
        "model": "그린시티 디젤",
        "additionalMemo": "2018.5 면허등록, 화성운수 → 경진여객 출신, 구.경기 76아 6157호; 조암영업소 예비"
    },
    "76a1289": {
        "route": "예비차량",
        "year": "18.4",
        "model": "그린시티 디젤",
        "additionalMemo": "2018.5 면허등록, 화성운수 → 경진여객 출신, 구.경기 76아 6158호"
    },
    "76a5807": {
        "route": "예비차량",
        "year": "24.11",
        "model": "BYD eBus11 EV",
        "additionalMemo": "2025.1 면허등록; 경기도 eBus11 112호"
    },
    "76a9907": {
        "route": "예비차량",
        "year": "15.9",
        "model": "뉴카운티 디젤",
        "additionalMemo": "경진여객 출신; 조암영업소 예비"
    },
    "73ba1274": {
        "route": "예비차량",
        "year": "14.12",
        "model": "그린시티 CNG",
        "additionalMemo": "오이도영업소 예비"
    },
    "73ba1275": {
        "route": "예비차량",
        "year": "16.8",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "2016.9 면허등록"
    },
    "73ba1277": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "원시동영업소 예비"
    },
    "73ba1278": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "본사 예비"
    },
    "73ba1287": {
        "route": "예비차량",
        "year": "15.7",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "본오동영업소 예비"
    },
    "73ba1293": {
        "route": "예비차량",
        "year": "14.12",
        "model": "그린시티 CNG",
        "additionalMemo": "본오동영업소 예비"
    },
    "73ba1337": {
        "route": "예비차량",
        "year": "16.8",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "2016.9 면허등록; 본사 예비"
    },
    "73ba1339": {
        "route": "예비차량",
        "year": "15.7",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "본오동영업소 예비"
    },
    "73ba1491": {
        "route": "예비차량",
        "year": "15.8",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "본사 예비"
    },
    "73ba1545": {
        "route": "예비차량",
        "year": "16.5",
        "model": "그린시티 디젤",
        "additionalMemo": "9번, 9-1번 공용예비"
    },
    "73ba1546": {
        "route": "예비차량",
        "year": "16.5",
        "model": "그린시티 디젤",
        "additionalMemo": "본사 예비"
    },
    "73ba1549": {
        "route": "예비차량",
        "year": "16.5",
        "model": "그린시티 디젤",
        "additionalMemo": "본사 예비"
    },
    "73ba1570": {
        "route": "예비차량",
        "year": "18.5",
        "model": "그린시티 CNG",
        "additionalMemo": "본오동영업소 예비"
    },
    "73ba1664": {
        "route": "예비차량",
        "year": "16.5",
        "model": "그린시티 디젤",
        "additionalMemo": "본사 예비"
    },
    "73ba1685": {
        "route": "예비차량",
        "year": "17.9",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "2017.10 면허등록; 본사 예비"
    },
    "73ba1686": {
        "route": "예비차량",
        "year": "17.10",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "본사 예비"
    },
    "73ba1091": {
        "route": "예비차량",
        "year": "15.1",
        "model": "뉴카운티 디젤",
        "additionalMemo": "2015.2 면허등록; 노선견습 차량"
    },
    "73ba1244": {
        "route": "예비차량",
        "year": "19.3",
        "model": "그린시티 CNG 개선형",
        "additionalMemo": "2019.6 면허등록; 38번 차량"
    },
    "73ba1280": {
        "route": "예비차량",
        "year": "15.7",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "61번 차량"
    },
    "73ba1286": {
        "route": "예비차량",
        "year": "15.8",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "55번 차량"
    },
    "73ba1294": {
        "route": "예비차량",
        "year": "17.7",
        "model": "유니버스 스페이스 엘레강스 CNG",
        "additionalMemo": "320번 차량, 사고로 인해 휴차"
    },
    "73ba1306": {
        "route": "예비차량",
        "year": "15.1",
        "model": "뉴카운티 디젤",
        "additionalMemo": "2015.2 면허등록; 본오동영업소 예비"
    },
    "73ba1345": {
        "route": "예비차량",
        "year": "14.12",
        "model": "그린시티 CNG",
        "additionalMemo": "오이도영업소 예비"
    },
    "73ba1376": {
        "route": "예비차량",
        "year": "17.12",
        "model": "블루시티 CNG 하이브리드 초저상버스",
        "additionalMemo": "30-2번 차량"
    },
    "73ba1457": {
        "route": "예비차량",
        "year": "15.2",
        "model": "뉴카운티 디젤",
        "additionalMemo": "2015.3 면허등록; 본사 예비"
    },
    "73ba1494": {
        "route": "예비차량",
        "year": "15.8",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "61번 차량"
    },
    "73ba1496": {
        "route": "예비차량",
        "year": "15.7",
        "model": "뉴슈퍼에어로시티 F/L CNG",
        "additionalMemo": "99-1번 차량"
    },
    "73ba1542": {
        "route": "예비차량",
        "year": "16.5",
        "model": "그린시티 디젤",
        "additionalMemo": "31-7번 차량"
    },
    "73ba1573": {
        "route": "예비차량",
        "year": "18.8",
        "model": "블루시티 CNG 하이브리드 초저상버스 개선형",
        "additionalMemo": "2018.9 면허등록; 101번 차량"
    },
    "73ba1579": {
        "route": "예비차량",
        "year": "18.8",
        "model": "블루시티 CNG 하이브리드 초저상버스 개선형",
        "additionalMemo": "2018.9 면허등록; 101번 차량"
    },
    "73ba1682": {
        "route": "예비차량",
        "year": "17.9",
        "model": "MAN 라이온스 시티 더블데커 2층버스 디젤",
        "additionalMemo": "2017.10 면허등록; 3102번 차량"
    },
    "73ba3121": {
        "route": "예비차량",
        "year": "19.5",
        "model": "뉴슈퍼에어로시티 F/L CNG 개선형",
        "additionalMemo": "2019.6 면허등록, 안산 태화상운 출신"
    },
    "75ba3136": {
        "route": "예비차량",
        "year": "18.8",
        "model": "그린시티 CNG 개선형",
        "additionalMemo": "2018.9 면허등록, 시흥교통 출신"
    },
    "72a4008": {
        "route": "예비차량",
        "year": "21.10",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2021.11 면허등록, 패찰에는 2021년 9월식으로 적힘"
    },
    "78a2977": {
        "route": "예비차량",
        "year": "17.12",
        "model": "FX116 하모니 NGV 전비형",
        "additionalMemo": "경기고속 출신, 구.경기 77바 1337호"
    },
    "78ja8124": {
        "route": "예비차량",
        "year": "23.5",
        "model": "뉴프리미엄 유니버스 프라임 F/L CNG",
        "additionalMemo": "2023.6 면허등록"
    }
};

export { BUS_VEHICLE_INFO };
