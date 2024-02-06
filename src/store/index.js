import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth-slice";
import cardslice from "./cartslice";


 const store = configureStore({
    reducer:{
        auth:authslice.reducer,
        card:cardslice.reducer
    }
})


export default store;