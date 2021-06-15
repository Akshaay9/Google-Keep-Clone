import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import Authreducer from "../features/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    User: Authreducer,
  },
});
