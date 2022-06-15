import { configureStore, createSlice } from '@reduxjs/toolkit'

let user =createSlice({ 
    name :'user',
    initialState : 'been',
    reducers:{
        changeName(state){
            return 'bin'
        }
    }
})
export let {changeName} = user.actions






let cart = createSlice({
    name : 'cart',
    initialState : [
      {id: "daily_mono", name : '[순성] 데일리모노 ISOFIX_카시트',sale:"298,000원", count : 2, details:"../public/img/daily_mono_details.jpg"},
      {id : 2, name : 'Grey Yordan', count : 1}
    ]
  })

export default configureStore({
  reducer: { 
    user:user.reducer,
    cart:cart.reducer
  }
}) 