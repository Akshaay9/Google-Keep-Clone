import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import Authreducer from "../features/Auth/AuthSlice";
import Notereducer from "../features/Notes/NotesSlice";

export const store = configureStore({
  reducer: {
    User: Authreducer,
    Notes:Notereducer
  },
});
