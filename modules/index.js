import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import navActiveReducer from "./reducer.nav";

export const store = configureStore({
  reducer: {
    navActivate: navActiveReducer,
  }
});

setupListeners(store.dispatch);
