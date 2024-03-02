import { configureStore } from "@reduxjs/toolkit";
import { albumReducer } from "./reducers";

export const store = configureStore({
    reducer: {albumReducer}
})