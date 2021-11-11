import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "../features/Auth/AuthSlice";
import Notereducer from "../features/Notes/NotesSlice";

export const store = configureStore({
  reducer: {
    User: Authreducer,
    Notes:Notereducer
  },
});
