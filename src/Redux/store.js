import { configureStore } from "@reduxjs/toolkit";

import {crptApi} from './crypto'

import { crptNewsApi } from "./newsSlice";

const store = configureStore({reducer:{
    [crptApi.reducerPath]: crptApi.reducer,
    [crptNewsApi.reducerPath]: crptNewsApi.reducer
},
// 
})

export default store;

