import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'








let cart = createSlice({
    name : 'cart',
    initialState : [
      {id: 0, title: '[순성] 데일리모노 ISOFIX_카시트',sale:"298,000원", count : 1, details:"../public/img/daily_mono_details.jpg"},
      {id: 1, title: '[다이치] 듀얼 오가닉 Larch-Fix 카시트',sale:"176,000원", count : 1, details:"../public/img/daily_mono_details.jpg"},
    ],
    reducers:{
      addCount(state){
        state[0].count++
      }
    }
  })

export default configureStore({
  reducer: { 
    user:user.reducer,
    cart:cart.reducer
  }
}) 