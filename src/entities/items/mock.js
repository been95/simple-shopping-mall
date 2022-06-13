const mockData = [
  { id: "daily_mono",type:"카시트", title: "[순성] 데일리모노 ISOFIX_카시트", desc: "신생아~7세까지 사용가능", image: "img/daily_mono.png",imageitem:"img/daily_mono_item.jpg", options: [ { optionType: "색상선택", optionValues: ["모노블랙"],},], weight:"8.5kg",cost:"390,000원",sale:"298,000원", details:"img/daily_mono_details.jpg" },
  { id: "daichi", title: "[다이치] 듀얼 오가닉 Larch-Fix 카시트", desc: "신생아~5세까지 사용가능", image: "img/daichi_1.png", options: [ { optionType: "색상선택", optionValues: ["오가니차콜"],},], weight:"6kg"  },
  { id: "pect", title: "[루미] 스펙트 I_ 360회전카시트", desc: "신생아~7세까지 사용가능", image: "img/spect.png", options: [ { optionType: "색상선택", optionValues: ["블랙","핑크","그레이"],},], weight:"15kg"   },
  { id: "duklefin", title: "[순성] 듀클핀 Isofix_카시트", desc: "신생아~7세까지 사용가능", image: "img/duklefin.png",options: [ { optionType: "색상선택", optionValues: ["애쉬블루","아이언그레이","그레이","네이비","탠저린","더블랙"],},], weight:"14.6kg" },
  { id: "daichi_one", title: "[다이치] 원픽스 360 Isofix 카시트", desc: "신생아~4세까지 사용가능", image: "img/daichi_one.png",options: [ { optionType: "색상선택", optionValues: ["블랙","다크그레이","베이지"],},], weight:"13.42kg" },
  { id: "migo", title: "[미고] 미고미니플러스5유모차", desc: "신생아~3세까지 사용가능", image: "img/migo.png" ,options: [ { optionType: "색상선택", optionValues: ["멜란지그레이"],},], weight:"5.8kg"},
  { id: "jibby_maris", title: "[지비] 마리스2유모차", desc: "신생아~4세까지 사용가능", image: "img/jibby_maris.png",options: [ { optionType: "색상선택", optionValues: ["럭스블랙","실버폭그레이","체리레드"],},], weightused:"~17kg" },
  { id: "lian_gram plus", title: "[리안]21.그램플러스유모차", desc: "신생아~36개월까지 사용가능", image: "img/lian_gram plus.png" ,options: [ { optionType: "색상선택", optionValues: ["시크블랙","크림아이보리","프렌치블루"],},], weight:"5.8kg" },
  { id: "lian_twin", title: "[리안]트윈쌍둥이절충형", desc: "신생아~36개월까지 사용가능", image: "img/lian_twin.png",options: [ { optionType: "색상선택", optionValues: ["미스틱네이비","슬레이트그레이"],},], weight:"7.7kg" },
  { id: "joy_avalite", title: "[조이]애발라이트듀오유모차", desc: "신생아~15kg까지 사용가능", image: "img/joy_avalite.png",options: [ { optionType: "색상선택", optionValues: ["코알(블랙)","딥씨(네이비)"],},], weight:"10.32kg"  },
  { id: "mi_go_hip", title: "[미고]올인원 힙시트", desc: "신생아~36개월까지 사용가능", image: "img/mi_go_hip sheet.png",options: [ { optionType: "색상선택", optionValues: ["그레이"],},], weightused:"3.5kg~15kg" },
  { id: "following_max", title: "[포그내]맥스라이트", desc: "신생아~36개월까지 사용가능", image: "img/following max light.png",options: [ { optionType: "색상선택", optionValues: ["데님베이지, 데님그레이"],},], material:" 겉감-나일론 100%,폴리에스터 100%"  },
  { id: "dich_louis", title: "[다이치]루이3in1올인원아기띠", desc: "신생아~36개월까지 사용가능", image: "img/dich_louis.png", options: [ { optionType: "색상선택", optionValues: ["차콜",],},] },
  { id: "yooppang", title: "[유팡]플러스LED젖병소독기", desc: "자동모드,터보모드", image: "img/yooppang plus.png",options: [ { optionType: "색상선택", optionValues: ["화이트", "블루","그레이","오렌지","그린","베이직"],},], function:"자동모드, 터보모드",weight:"6.54kg" },
  { id: "ray_queen", title: "[레이퀸]6세대젖병소독기", desc: "완벽한 살균건조", image: "img/ray queen.png",options: [ { optionType: "색상선택", optionValues: ["그레이", "화이트","핑크"],},], function:"완벽한살균건조, 상하uv자외선",weight:"5.5kg"},
  { id: "spectra", title: "[스펙트라]젖병소독기", desc: "간편한 원터치조작", image: "img/spectra.png",options: [ { optionType: "색상선택", optionValues: ["클래시화이트", "차밍다크그레이"],},], function:"완벽한 살균건조, 듀얼UV자외선",weight:"5.5kg" },
  { id: "dukle_carry", title: "[순성]듀클캐리", desc: "3~8세까지 사용가능", image: "img/dukle_carry.png", options: [ { optionType: "색상선택", optionValues: ["그레이"],},], weight:"3.3kg" },
  { id: "bebe_pram", title: "[베베프람]이지고웨건플러스", desc: "권장하중 50kg까지", image: "img/bebe pram.png", weight:"14.5kg", weightused:"50kg" },
  { id: "joaht", title: "[조아뜨]듀얼범퍼매트_T500", desc: "주문제작상품", image: "img/joaht.png",options: [ { optionType: "색상선택", optionValues: ["그레이","크림"],},], age:"1세~7세"  },
];

export default mockData;
