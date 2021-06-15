import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "60c6ed5289febd15a0d24a9c",
  name: "Akshay",
  profileImage: "",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzZlZDUyODlmZWJkMTVhMGQyNGE5YyIsImlhdCI6MTYyMzc1MTAyNH0.gK2u1yhU_C1aK3jJjukUL50Kz65_iAgbSw7YE_8vJoM",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: () => {},
  },
});

export const { addUser } = AuthSlice.actions;

export default AuthSlice.reducer;
