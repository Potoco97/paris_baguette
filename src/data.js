const data = [
    {
        id: 0,
        cate: "today",
        name: "프렌치 크라상",
        img: "/img/프렌치크라상.jpg",
        price: 4000
    },
    {
        id: 1,
        cate: "today",
        name: "블랙올리브 치즈베이글",
        img: "/img/블랙올리브치즈베이글_001-600x600.jpg",
        price: 4400
    },
    {
        id: 2,
        cate: "today",
        name: "만월빵",
        img: "/img/만월빵.png",
        price: 3000
    },
    {
        id: 3,
        cate: "today",
        name: "런치 샌드위치",
        img: "/img/런치샌드위치.jpg",
        price: 5800
    },
    {
        id: 4,
        cate: "bread",
        name: "발효버터소금빵",
        img: "/img/1발효버터소금빵.jpg",
        price: 3800
    },
    {
        id: 5,
        cate: "bread",
        name: "굿모닝롤",
        img: "/img/2굿모닝롤.jpg",
        price: 4200
    },
    {
        id: 6,
        cate: "bread",
        name: "롱소시지빵",
        img: "/img/3롱롱소시지빵.jpg",
        price: 3500
    },
    {
        id: 7,
        cate: "bread",
        name: "프렌치크라상",
        img: "/img/프렌치크라상.jpg",
        price: 2800
    },
    {
        id: 8,
        cate: "bread",
        name: "런치샌드위치",
        img: "/img/런치샌드위치.jpg",
        price: 4600
    },
    {
        id: 9,
        cate: "bread",
        name: "소보루빵",
        img: "/img/소보루빵.jpg",
        price: 2200
    },
    //케잌
    {
        id: 10,
        cate: "cake",
        name: "별이 빛나는 밤에",
        img: "/img/별이빛나는밤에.jpg",
        price: 18000
    },
    {
        id: 11,
        cate: "cake",
        name: "딸기 블라썸 케이크",
        img: "/img/딸기 블라썸 케이크.jpg",
        price: 27000
    },
    {
        id: 12,
        cate: "cake",
        name: "마이넘버원3",
        img: "/img/마이넘버원3.png",
        price: 30000
    },
    {
        id: 13,
        cate: "cake",
        name: "고구마반 생크림반 케이크",
        img: "/img/고구마반생크림반케이크.jpg",
        price: 26000
    },
    {
        id: 14,
        cate: "cake",
        name: "초코반 딸기반 케이크",
        img: "/img/초코반딸기반케이크.jpg",
        price: 38000
    },
    {
        id: 15,
        cate: "cake",
        name: "블라썸 러브",
        img: "/img/블라썸 러브.png",
        price: 3700
    },
    //샐러드
    {
        id: 16,
        cate: "salad",
        name: "에그샐러드샌드위치",
        img: "/img/에그샐러드샌드위치.png",
        price: 4700
    },
    {
        id: 17,
        cate: "salad",
        name: "단백질 듬뿍 에그 샐러드",
        img: "/img/단백질-듬뿍-에그-샐러드.jpg",
        price: 5700
    },
    {
        id: 18,
        cate: "salad",
        name: "크리스피 치킨 샐러드",
        img: "/img/크리스피-치킨-샐러드.jpg",
        price: 4500
    },
    {
        id: 19,
        cate: "salad",
        name: "치킨디럭스 샌드위치",
        img: "/img/치킨디럭스샌드위치.png",
        price: 5800
    },
    {
        id: 20,
        cate: "salad",
        name: "런치 샌드위치",
        img: "/img/런치-샌드위치.jpg",
        price: 3100
    },
    {
        id: 21,
        cate: "salad",
        name: "미니버거 샌드위치",
        img: "/img/미니버거-샌드위치.jpg",
        price: 2900
    },
    //선물
    {
        id: 22,
        cate: "gift",
        name: "명가명품 우리벌꿀 카스테라",
        img: "/img/명가명품-우리벌꿀-카스테라.jpg",
        price: 12000
    },
    {
        id: 23,
        cate: "gift",
        name: "로스팅 호두 듬뿍 호두파이",
        img: "/img/호두.jpg",
        price: 9700
    },
    {
        id: 24,
        cate: "gift",
        name: "블루베리듬뿍 롤케익",
        img: "/img/블루베리듬뿍-롤케익.jpg",
        price: 15000
    },
    {
        id: 25,
        cate: "dessert",
        name: "치즈가 부드러운 시간",
        img: "/img/치즈가-부드러운-시간.png",
        price: 9800
    },
    {
        id: 26,
        cate: "dessert",
        name: "미스터베어",
        img: "/img/미스터베어.jpg",
        price: 2700
    },
    {
        id: 27,
        cate: "dessert",
        name: "초코마카롱",
        img: "/img/초코마카롱.png",
        price: 2500
    },
    {
        id: 28,
        cate: "dessert",
        name: "초콜릿 머핀",
        img: "/img/초콜릿머핀.jpg",
        price: 2400
    },
    {
        id: 29,
        cate: "dessert",
        name: "오리지널 머핀",
        img: "/img/오리지널머핀.jpg",
        price: 2200
    },
    {
        id: 30,
        cate: "dessert",
        name: "로스팅 호두로 더 고소한 조각호두파이",
        img: "/img/로스팅 호두로 더 고소한 조각호두파이.jpg",
        price: 4700
    },
    {
        id: 31,
        cate: "cffe",
        name: "(HOT) 아메리카노",
        img: "/img/(HOT)아메리카노.jpg",
        price: 2000
    },
    {
        id: 32,
        cate: "cffe",
        name: "(ICE) 아메리카노",
        img: "/img/(ICE)아메리카노.jpg",
        price: 2000
    },
    {
        id: 33,
        cate: "cffe",
        name: "치키제로티 망고&캐모마일",
        img: "/img/치키제로티망고&캐모마일.jpg",
        price: 4000
    },
    {
        id: 34,
        cate: "cffe",
        name: "아침엔딸기우유 200㎖",
        img: "/img/아침엔딸기우유200ml.jpg",
        price: 1800
    },
    {
        id: 35,
        cate: "cffe",
        name: "아침후레쉬우유 200㎖",
        img: "/img/아침후레쉬우유-200㎖.jpg",
        price: 2200
    },
    {
        id: 36,
        cate: "cffe",
        name: "아침초코우유 200㎖",
        img: "/img/아침초코-우유-200㎖.jpg",
        price: 1800
    },
    {
        id: 37,
        cate: "brrl",
        name: "치즈듬뿍 볼로네제 파스타",
        img: "/img/치즈듬뿍볼로네제파스타.jpg",
        price: 5000
    },
    {
        id: 38,
        cate: "brrl",
        name: "콘스프",
        img: "/img/콘스프.jpg",
        price: 4000
    },
    {
        id: 39,
        cate: "brrl",
        name: "매콤 핫 투움바 파스타",
        img: "/img/매콤핫투움바파스타.jpg",
        price: 6000
    },
    {
        id: 40,
        cate: "bred2",
        name: "발효버터소금빵",
        img: "/img/1발효버터소금빵.jpg",
        price: 2800
    },
    {
        id: 41,
        cate: "bred2",
        name: "굿모닝롤",
        img: "/img/2굿모닝롤.jpg",
        price: 2800
    },
    {
        id: 42,
        cate: "bred2",
        name: "롱소시지빵",
        img: "/img/3롱롱소시지빵.jpg",
        price: 3500
    },
    {
        id: 43,
        cate: "bred2",
        name: "블랙올리브치즈 베이글",
        img: "/img/1블랙올리브치즈베이글.jpg",
        price: 4700
    },
    {
        id: 44,
        cate: "bredl",
        name: "인생크림빵 애플망고",
        img: "/img/인생크림빵애플망고.jpg",
        price: 4600
    },
    {
        id: 45,
        cate: "bredl",
        name: "발효버터 먹물소금빵",
        img: "/img/발효버터먹물소금빵.jpg",
        price: 3200
    },
    {
        id: 46,
        cate: "bredl",
        name: "딸기롤",
        img: "/img/딸기롤.jpg",
        price: 10000
    },
    {
        id: 47,
        cate: "bredl",
        name: "[파란라벨]고단백 곡물롤",
        img: "/img/파란라벨곡물롤.jpg",
        price: 4700
    },
    {
        id: 48,
        cate: "bredl",
        name: "[파란라벨]홀그레인 오트 식빵",
        img: "/img/파란라벨오트식빵.jpg",
        price: 4500
    },
    {
        id: 49,
        cate: "bredl",
        name: "[파란라벨]단백질 로만밀 식빵",
        img: "/img/파란라벨로만밀식빵.jpg",
        price: 7800
    },
    {
        id: 50,
        cate: "caik2",
        name: "별이 빛나는 밤에",
        img: "/img/별이빛나는밤에.jpg",
        price: 15000
    },
    {
        id: 51,
        cate: "caik2",
        name: "딸기 블라썸 케이크(자몽/오렌지)",
        img: "/img/딸기 블라썸 케이크.jpg",
        price: 22000
    },
    {
        id: 52,
        cate: "caik2",
        name: "마이넘버원3",
        img: "/img/마이넘버원3.png",
        price: 23000
    },
        {
        id: 53,
        cate: "caik2",
        name: "고구마반생크림반케이크",
        img: "/img/고구마반생크림반케이크.jpg",
        price: 23000
    },
    {
        id: 54,
        cate: "caikl",
        name: "토트넘 슛-골인 케이크",
        img: "/img/토트넘슛골인케이크.jpg",
        price: 30000
    },
    {
        id: 55,
        cate: "caikl",
        name: "매직 캣타워 케이크",
        img: "/img/위시캣타워케이크.jpg",
        price: 31000
    },
    {
        id: 56,
        cate: "caikl",
        name: "상어가족과 파라다이스",
        img: "/img/상어가족과파라다이스.jpg",
        price: 28000
    },
    {
        id: 57,
        cate: "caikl",
        name: "아름다운 시작",
        img: "/img/아름다운시작.jpg",
        price: 47000
    },
    {
        id: 58,
        cate: "caikl",
        name: "행복한 시간",
        img: "/img/행복한시간.jpg",
        price: 45000
    },
    {
        id: 59,
        cate: "caikl",
        name: "영원한 사랑",
        img: "/img/영원한사랑.jpg",
        price: 40000
    },
    {
        id: 60,
        cate: "sendwhic2",
        name: "햄치즈 오리지널 머핀",
        img: "/img/햄치즈 오리지널 머핀.jpg",
        price: 2800
    },
    {
        id: 61,
        cate: "sendwhic2",
        name: "치킨커틀릿 샐러드랩",
        img: "/img/치킨커틀릿샐러드랩.png",
        price: 4000
    },
    {
        id: 62,
        cate: "sendwhic2",
        name: "에그샐러드 샌드위치",
        img: "/img/에그샐러드샌드위치.png",
        price: 3800
    },
        {
        id: 63,
        cate: "sendwhic2",
        name: "런치샌드위치",
        img: "/img/런치샌드위치.jpg",
        price: 3800
    },
    {
        id: 64,
        cate: "sendwhicl",
        name: "[파란라벨]햄에그곡물롤",
        img: "/img/파란라벨햄에그곡물롤.jpg",
        price: 5900
    },
    {
        id: 65,
        cate: "sendwhicl",
        name: "[파란라벨]야채샐러드롤",
        img: "/img/야채샐러드롤파란라벨.jpg",
        price: 4500
    },
    {
        id: 66,
        cate: "sendwhicl",
        name: "fresh한입쏙미니버거",
        img: "/img/미니버거샌드위치.jpg",
        price: 3500
    },
    {
        id: 67,
        cate: "sendwhicl",
        name: "랜치 그레인 볼",
        img: "/img/랜치그레인볼.jpg",
        price: 4000
    },
    {
        id: 68,
        cate: "sendwhicl",
        name: "리코타프로틴볼",
        img: "/img/리코타프로틴볼.jpg",
        price: 4500
    },
    {
        id: 69,
        cate: "sendwhicl",
        name: "데리야끼 치킨 샐러드",
        img: "/img/데리야끼치킨샐러드.jpg",
        price: 5800
    },
    {
        id: 70,
        cate: "cffe2",
        name: "(HOT) 아메리카노",
        img: "/img/(HOT)아메리카노.jpg",
        price: 2000
    },
    {
        id: 71,
        cate: "cffe2",
        name: "(ICE) 아메리카",
        img: "/img/(ICE)아메리카노.jpg",
        price: 2000
    },

    {
        id: 72,
        cate: "cffe2",
        name: "카페라떼",
        img: "/img/카페라떼.JPG",
        price: 3500
    },
    {
        id: 73,
        cate: "cffe2",
        name: "아이스 카페라떼",
        img: "/img/아이스카페라떼.jpg",
        price: 3500
    },

    {
        id: 74,
        cate: "cffee",
        name: "커피 카라멜 팝콘 빙수",
        img: "/img/카라멜팝콘빙수.PNG",
        price: 11000
    },
    {
        id: 75,
        cate: "cffee",
        name: "POP 애플망고 빙수",
        img: "/img/애플망고빙수.png",
        price: 15000
    },
    {
        id: 76,
        cate: "cffee",
        name: "통단팥 듬뿍 우유 팥빙수",
        img: "/img/통단팥듬뿍우유팥빙수.jpg",
        price: 9900
    },
    {
        id: 77,
        cate: "cffee",
        name: "아이스 제주녹차라떼",
        img: "/img/아이스녹차라떼.jpg",
        price: 4700
    },
    {
        id: 78,
        cate: "cffee",
        name: "아이스 초코포레누아",
        img: "/img/아이스초코포레누아.jpg",
        price: 5500
    },
    {
        id: 79,
        cate: "cffee",
        name: "문경 오미자 에이드",
        img: "/img/문경 오미자 에이드.jpg",
        price: 4600
    },
        {
        id: 80,
        cate: "deget2",
        name: "치즈가 부드러운 시간",
        img: "/img/치즈가부드러운시간.png",
        price: 5000
    },
        {
        id: 81,
        cate: "deget2",
        name: "초콜릿 머핀",
        img: "/img/초콜릿머핀.jpg",
        price: 2800
    },
        {
        id: 82,
        cate: "deget2",
        name: "미스베어",
        img: "/img/미스베어.JPG",
        price: 2500
    },
        {
        id: 83,
        cate: "deget2",
        name: "초코 마카롱",
        img: "/img/초코마카롱.png",
        price: 2500
    },
        {
        id: 84,
        cate: "degetl",
        name: "생딸기 레어치즈 타르트(1호)",
        img: "/img/생딸기레어치즈타르트(1호).jpg",
        price: 7800
    },
        {
        id: 85,
        cate: "degetl",
        name: "토트넘 유니폼 쿠키",
        img: "/img/토트넘유니폼쿠키.jpg",
        price: 2800
    },
        {
        id: 86,
        cate: "degetl",
        name: "딸기돌돌크레이프",
        img: "/img/딸기돌돌크레이프.jpg",
        price: 8900
    },
        {
        id: 87,
        cate: "degetl",
        name: "무화과 얼그레이 스콘",
        img: "/img/무화과얼그레이스콘.jpg",
        price: 7000
    },
        {
        id: 88,
        cate: "degetl",
        name: "스모어 마시멜로우 타르트",
        img: "/img/스모어마시멜로우타르트.jpg",
        price: 4000
    },
    {
        id: 89,
        cate: "degetl",
        name: "바닐라빈 슈크림슈",
        img: "/img/슈크림슈.png",
        price: 2200
    },
    //메인스테이지
        {
        id: 90,
        cate: "maintab",
        name: "고객센터",
        serm: "고객의 소리를 적극 경청하고 고객만족 향상 활동을 지속적으로 실천합니다.",
    },
     {
        id: 91,
        cate: "maintab",
        name: "고객센터",
        serm: "고객의 소리를 적극 경청하고 고객만족 향상 활동을 지속적으로 실천합니다.",
    },
     {
        id: 92,
        cate: "maintab",
        name: "고객센터",
        serm: "고객의 소리를 적극 경청하고 고객만족 향상 활동을 지속적으로 실천합니다.",
    },

]

export default data;
