import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import pkg from "lodash";
const { extend } = pkg;
const initialState = {
  notes: [],
  archieves: [],
  trash: [],
  labels: [],
  status: "idle",
};

// get all posts
export const getAllNotes = createAsyncThunk("notes/all", async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };
  const data = await axios.get(`http://localhost:5000/api/post`, config);
  return data.data;
});

export const getAllTags = createAsyncThunk("tags/all", async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };
  const data = await axios.get(`http://localhost:5000/api/label`, config);
  return data.data;
});

export const getAllTrash = createAsyncThunk("trash/all", async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };
  const data = await axios.get(`http://localhost:5000/api/trash`, config);
  return data.data;
});

export const getAllArchieves = createAsyncThunk(
  "archieves/all",
  async (token) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const data = await axios.get(`http://localhost:5000/api/archieve`, config);
    return data.data;
  }
);

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

// update new post
export const updatedNote = createAsyncThunk(
  "notes/update",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/post/${dataToBeSent.id}`,
        dataToBeSent.data,
        config
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// archieve  post
export const archieveNote = createAsyncThunk(
  "notes/archieve",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/post/${dataToBeSent.id}/addToArchieve`,
        null,
        config
      );

      return data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
// unarchieve  post
export const unArchieveNote = createAsyncThunk(
  "notes/unarchieve",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/archieve/${dataToBeSent.id}/addToPost`,
        null,
        config
      );
      console.log(data.data);
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
  reducers: {
    pinUnpin: (state, { payload }) => {
      state.notes = state.notes.map((ele) =>
        ele._id == payload
          ? {
              ...ele,
              isPinned: !ele.isPinned,
            }
          : ele
      );
    },
    updateNoteLocally: (state, { payload }) => {
      state.notes = state.notes.map((ele) =>
        ele._id == payload.id
          ? {
              ...extend(ele, payload.data),
            }
          : ele
      );
    },
    addToArchieve: (state, { payload }) => {
      let individualNote = state.notes.find((ele) => ele._id == payload);
      state.notes = state.notes.filter((ele) => ele._id !== payload);
      state.archieves.unshift(individualNote);
    },
    unArchieve: (state, { payload }) => {
      let individualNote = state.archieves.find((ele) => ele._id == payload);
      state.archieves = state.archieves.filter((ele) => ele._id !== payload);
      state.notes.unshift(individualNote);
    },
  },
  extraReducers: {
    [getAllNotes.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllNotes.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.notes = payload;
    },
    [getAllTags.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllTags.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.labels = payload;
    },
    [getAllTrash.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllTrash.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.trash = payload;
    },
    [getAllArchieves.pending]: (state, action) => {
      state.status = "pending";
    },
    [getAllArchieves.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.archieves = payload;
    },
    [uploadNote.pending]: (state, action) => {
      state.status = "pending";
    },
    [uploadNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.notes.unshift(payload);
    },
    [archieveNote.pending]: (state, action) => {
      state.status = "pending";
    },
    [archieveNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.archieves = payload;
    },
    [unArchieveNote.pending]: (state, action) => {
      state.status = "pending";
    },
    [unArchieveNote.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.notes = payload;
    },
  },
});

export const { pinUnpin, updateNoteLocally, addToArchieve, unArchieve } =
  NotesSlice.actions;

export default NotesSlice.reducer;
