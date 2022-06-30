import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: 0, title: "[순성] 데일리모노 ISOFIX_카시트", sale: "298000", count: 1 },
  // { id: 1, title: "[다이치] 듀얼 오가닉 Larch-Fix 카시트", sale: "176000", count: 1 },
  // { id: 2, title: "[루미] 스펙트 I_ 360회전카시트", sale: "378000", count: 1 },
  // { id: 3, title: "[순성] 듀클핀 Isofix_카시트", sale: "347000", count: 1 },
  // { id: 4, title: "[다이치] 원픽스 360 Isofix 카시트", sale: "368000", count: 1 },
  // { id: 5, title: "[순성]듀클캐리", sale: "92000", count: 1 },
  // { id: 6, title: "[미고] 미니플러스5유모차", sale: "1000", count: 1 },
  // { id: 7, title: "[지비] 마리스2유모차", sale: "230000", count: 1 },
  // { id: 8, title: "[리안]21.그램플러스유모차", sale: "208000", count: 1 },
  // { id: 9, title: "[리안]트윈쌍둥이절충형", sale: "282000", count: 1 },
  // { id: 10, title: "[조이]애발라이트듀오유모차", sale: "328000", count: 1 },
  // { id: 11, title: "[조아뜨]듀얼범퍼매트_T500", sale: "223000", count: 1 },
  // { id: 12, title: "[미고]올인원 힙시트", sale: "1000", count: 1 },
  // { id: 13, title: "[포그내]맥스라이트", sale: "228000", count: 1 },
  // { id: 14, title: "[다이치]루이3in1올인원아기띠", sale: "145000", count: 1 },
  // { id: 15, title: "[유팡]플러스LED젖병소독기", sale: "235000", count: 1 },
  // { id: 16, title: "[레이퀸]6세대젖병소독기", sale: "182000", count: 1 },
  // { id: 17, title: "[스펙트라]젖병소독기", sale: "185000", count: 1 },
  // { id: 18, title: "[베베프람]이지고웨건플러스", sale: "167000", count: 1 },
];

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCount(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    },
    addMinus(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          item.count === 0;
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
    },
    addDelete(state, action) {
      return state.filter((a) => a.id !== action.payload);
    },
    addItem(state, action) {
      const index = state.findIndex((item) => item.id == action.payload.id);

      if (index > -1) {
        const newState = [...state];
        newState[index] = {
          ...newState[index],
          count: newState[index].count + 1,
        };
        return newState;
      }
      return [
        ...state,
        {
          ...action.payload,
          count: 1,
        },
      ];
    },
  },
});

export let { addCount, addMinus, addDelete, addItem } = cartReducer.actions;
