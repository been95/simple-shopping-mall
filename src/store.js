import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    increase(state, a){
      state.age += a.payload
    }
  }
}) 
export let {changeName, increase} = user.actions






let cart = createSlice({
    name : 'cart',
    initialState : [
      {id: "daily_mono", title: '[순성] 데일리모노 ISOFIX_카시트',sale:"298,000원", count : 2, details:"../public/img/daily_mono_details.jpg"},
      {id: "daily_mono", title: '[순성] 데일리모노 ISOFIX_카시트',sale:"298,000원", count : 2, details:"../public/img/daily_mono_details.jpg"},
    
    ]
  })

export default configureStore({
  reducer: { 
    user:user.reducer,
    cart:cart.reducer
  }
}) 