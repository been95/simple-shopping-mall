import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1, 
    title: "[미고] 미고미니플러스5유모차",
    sale: "298,000원", 
    count: 1
  },
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
    priceSum (state, action){
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
    addItem(state, action) {
      return [...state, action.payload];
    },
  },
});

export let { addCount, addMinus, addDelete, addItem, priceSum } = cartReducer.actions;
