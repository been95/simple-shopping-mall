import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/slice";
import { cartReducer } from "./cart/slice";

const reducer = {
  user: userReducer.reducer,
  cart: cartReducer.reducer,
};

export default configureStore({
  reducer,
});
