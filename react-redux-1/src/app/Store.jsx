import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from '../features/AuthReducer'
export  let store = configureStore({
    reducer: {
    Auth : AuthReducer ,
  },
})