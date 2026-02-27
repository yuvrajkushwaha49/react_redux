import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/CunterSlice";
export const Store = configureStore({

    reducer:{
        counter: counterSlice,
    }
})
