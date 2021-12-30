import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../slices/news-slice";

export const store = configureStore({
  reducer: combineReducers({ news: NewsReducer }),
});

export type State = ReturnType<typeof store.getState>;
