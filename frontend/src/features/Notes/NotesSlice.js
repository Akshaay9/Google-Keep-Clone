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
//  update archive
export const updatedArchive = createAsyncThunk(
  "archive/update",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/archieve/${dataToBeSent.id}`,
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

// move post to trash
export const noteToTrash = createAsyncThunk(
  "notes/notetrash",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/post/${dataToBeSent.id}/addToTrash`,
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

// move archieve to trash
export const archieveToTrash = createAsyncThunk(
  "notes/archieveTrash",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/archieve/${dataToBeSent.id}/addToTrash`,
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

// restore
export const restoreFromTrash = createAsyncThunk(
  "notes/restoretrash",
  async (dataToBeSent, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": dataToBeSent.token,
      },
    };
    try {
      const data = await axios.post(
        `http://localhost:5000/api/trash/${dataToBeSent.id}/restore`,
        null,
        config
      );
      console.log(data)
      return data.data;
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
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
    updateArchieveLocally: (state, { payload }) => {
      state.archieves = state.archieves.map((ele) =>
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
    addNoteToTrash: (state, { payload }) => {
      let individualNote = state.notes.find((ele) => ele._id == payload);
      state.notes = state.notes.filter((ele) => ele._id !== payload);
      state.trash.unshift(individualNote);
    },
    addArchieveToTrash: (state, { payload }) => {
      let individualNote = state.archieves.find((ele) => ele._id == payload);
      state.archieves = state.archieves.filter((ele) => ele._id !== payload);
      state.trash.unshift(individualNote);
    },

    restoreTrash: (state, { payload }) => {
      let individualNote = state.trash.find((ele) => ele._id == payload);

      if (individualNote.location == "Post") {
        console.log("hey");
        state.notes.unshift({ ...individualNote, isPinned: false });
      } else {
        state.archieves.unshift({ ...individualNote, isPinned: false });
      }
      state.trash = state.trash.filter((ele) => ele._id != payload);
    },
    deletePermanently: (state, { payload }) => {
      state.trash = state.trash.filter((ele) => ele._id != payload);
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
    [noteToTrash.pending]: (state, action) => {
      state.status = "pending";
    },
    [noteToTrash.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.trash = payload;
    },
    [archieveToTrash.pending]: (state, action) => {
      state.status = "pending";
    },
    [archieveToTrash.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.trash = payload;
    },
    [restoreFromTrash.pending]: (state, action) => {
      state.status = "pending";
    },
    [restoreFromTrash.fulfilled]: (state, { payload }) => {
      state.status = "success";
      if(payload.type=="notes"){
        state.notes=payload.data
      }
      else {
        state.archieves=payload.data
      }
     
    },
  },
});

export const {
  pinUnpin,
  updateNoteLocally,
  addToArchieve,
  unArchieve,
  updateArchieveLocally,
  addNoteToTrash,
  addArchieveToTrash,
  restoreTrash,
  deletePermanently,
} = NotesSlice.actions;

export default NotesSlice.reducer;
