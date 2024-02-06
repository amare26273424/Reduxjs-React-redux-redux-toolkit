import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isloggedin:true
  };

const  authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state){
            state.isloggedin = true
        },
        logout(state){
            state.isloggedin =false
        }
    }
})


export const {login,logout} =   authslice.actions

export default authslice