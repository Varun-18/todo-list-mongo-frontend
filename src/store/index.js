import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice"

const reducer = combineReducers({
    user : userReducer
})

export const store = configureStore({
    reducer
})

