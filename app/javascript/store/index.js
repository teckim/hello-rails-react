import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/messagesSlice";

const reducer = {
  messages: messagesReducer,
};

const store = (preloadedState) => configureStore({ reducer, preloadedState });

export default store;
