import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  age: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    increase(state, actions) {
      state.age += actions.payload;
    },
  },
});

export let { changeName, increase } = userReducer.actions;
