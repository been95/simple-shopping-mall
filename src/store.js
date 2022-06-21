import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name : 'cart',
  initialState : [
    { id: 0, title: "[순성] 데일리모노 ISOFIX_카시트", sale: "298,000원", count: 1, },
  ],
  reducers : {
    addCount(state, action){
     let number =state.findIndex((a)=>a.id ===action.payload)
     state[number].count++
    },
    addDelete(state, action){
      let number =state.findIndex((a)=>a.id ===action.payload) 
    }
    addItem(state, action){
      state.push(action.payload)
    }
  }
}) 

export let { addCount, addItem,} = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
