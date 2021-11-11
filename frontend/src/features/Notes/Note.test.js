import NoteReducer, {
  pinUnpin,
  updateNoteLocally,
  addToArchieve,
  unArchieve,
  updateArchieveLocally,
  addNoteToTrash,
  addArchieveToTrash,
  restoreTrash,
  deletePermanently,
} from "./NotesSlice";

describe("Testing Note reducer", () => {
  var initialState = {
    notes: [
      {
        color: "white",
        label: [],
        _id: "60cc59d3ba58460022d8ef0c",
        title: "note",
        description: "heyllo",
        isPinned: false,
        createdAt: "2021-06-18T08:31:15.557Z",
        updatedAt: "2021-06-18T08:31:15.557Z",
      },
    ],
    archieves: [
      {
        color: "white",
        label: [],
        _id: "60cc59d3ba58460022d8ef0c",
        title: "note",
        description: "heyllo",
        isPinned: false,
        createdAt: "2021-06-18T08:31:15.557Z",
        updatedAt: "2021-06-18T08:31:15.557Z",
      },
    ],
    trash: [],
    labels: [],
    searchedNote: [],
  };

  // 1)  testing pin unpin of a note
  test("should pinUnpin a note", () => {
    const requiredState = NoteReducer(
      initialState,
      pinUnpin("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState.notes[0].isPinned).toEqual(true);
  });

  // 2) Tesing updating the present note
  test("should update a note", () => {
    const requiredState = NoteReducer(
      initialState,
      updateNoteLocally({
        id: "60cc59d3ba58460022d8ef0c",
        data: {
          color: "black",
          title: "note1",
          description: "update desc",
          label: ["home", "place"],
        },
      })
    );
    expect(requiredState.notes[0]).toEqual({
      color: "black",
      label: ["home", "place"],
      _id: "60cc59d3ba58460022d8ef0c",
      title: "note1",
      description: "update desc",
      isPinned: false,
      createdAt: "2021-06-18T08:31:15.557Z",
      updatedAt: "2021-06-18T08:31:15.557Z",
    });
  });

  // 3) Testing adding note to the archieve
  test("should remove note from Notes and add it to Archieve", () => {
    const requiredState = NoteReducer(
      initialState,
      addToArchieve("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [],
      archieves: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      trash: [],
      labels: [],
      searchedNote: [],
    });
  });

  // 4)  removing note  from archieve and adding it to Note
  test("should remove note from Archieve and add it to Unarchieve", () => {
    const requiredState = NoteReducer(
      initialState,
      unArchieve("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      archieves: [],
      trash: [],
      labels: [],
      searchedNote: [],
    });
  });

  // 5) updating note present in archieve
  test("should update note present in archieve", () => {
    const requiredState = NoteReducer(
      initialState,
      updateArchieveLocally({
        id: "60cc59d3ba58460022d8ef0c",
        data: {
          color: "black",
          title: "note1",
          description: "update desc",
          label: ["home", "place"],
        },
      })
    );
    expect(requiredState.archieves[0]).toEqual({
      color: "black",
      label: ["home", "place"],
      _id: "60cc59d3ba58460022d8ef0c",
      title: "note1",
      description: "update desc",
      isPinned: false,
      createdAt: "2021-06-18T08:31:15.557Z",
      updatedAt: "2021-06-18T08:31:15.557Z",
    });
  });

  // adding a note to trash
  // 6) adding note to trash
  test("should add a note to trash", () => {
    const requiredState = NoteReducer(
      initialState,
      addNoteToTrash("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [],
      archieves: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      trash: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      labels: [],
      searchedNote: [],
    });
  });

  // 7) add a note present in archieve to trash

  test("should add archieve note to trash", () => {
    const requiredState = NoteReducer(
      initialState,
      addArchieveToTrash("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      archieves: [],
      trash: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      labels: [],
      searchedNote: [],
    });
  });

  // 8)shd restore a note fro trash to its respective place
  test("should restore a trashed note to its initial position", () => {
    const initialState = {
      notes: [],
      archieves: [],
      trash: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          location: "Post",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      labels: [],
      searchedNote: [],
    };
    const requiredState = NoteReducer(
      initialState,
      restoreTrash("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          location: "Post",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      archieves: [],
      trash: [],
      labels: [],
      searchedNote: [],
    });
  });

  // shd clear notes present in trahs permanently
  test("should delete note in trash ", () => {
    const initialState = {
      notes: [],
      archieves: [],
      trash: [
        {
          color: "white",
          label: [],
          _id: "60cc59d3ba58460022d8ef0c",
          title: "note",
          description: "heyllo",
          location: "Post",
          isPinned: false,
          createdAt: "2021-06-18T08:31:15.557Z",
          updatedAt: "2021-06-18T08:31:15.557Z",
        },
      ],
      labels: [],
      searchedNote: [],
    };
    const requiredState = NoteReducer(
      initialState,
      deletePermanently("60cc59d3ba58460022d8ef0c")
    );
    expect(requiredState).toEqual({
      notes: [],
      archieves: [],
      trash: [],
      labels: [],
      searchedNote: [],
    });
  });
});
