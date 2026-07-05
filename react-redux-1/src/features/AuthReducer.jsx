import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name:"user",
    initialState:{
        user: null,
    },
    reducers:{
        users:(state , action)=>{
           state.user = action.payload;
        },
        reduceuser:(state)=>{
            state.user = null;
        }
    }
})


export let {users ,reduceuser} = authSlice.actions ;
export default authSlice.reducer ;