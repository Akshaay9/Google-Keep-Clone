import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  notes: [],
  archieves: [],
  trash: [],
  labels: [],
  status: "idle",
};

// get all posts
export const getAllNotes = createAsyncThunk("notes/all", async () => {
  const data = await axios.get(`http://localhost:5000/api/post`);
  return data.data;
});

// upload new post
export const uploadNote = createAsyncThunk(
  "notes/upload",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    //   console.log(dataToBeSent)
    // toast.info("uploading new poast !");
    try {
      const data = await axios.post(
        `http://localhost:5000/api/post`,
        dataToBeSent.data,
        config
      );

      console.log(data.data);
      // toast.success("new poast added !", {});
      return data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const NotesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllNotes.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllNotes.fulfilled]: (state, { payload }) => {
      state.loginStatus = "success";
      state.notes = payload;
    },
    [uploadNote.pending]: (state, action) => {
      state.status = "pending";
    },
    [uploadNote.fulfilled]: (state, { payload }) => {
      state.loginStatus = "success";
      state.notes.unshift(payload);
    },
  },
});

export default NotesSlice.reducer;
