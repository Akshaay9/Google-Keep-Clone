import React from "react";
import {
  archieveNote,
  pinUnpin,
  updatedNote,
  addToArchieve,
  unArchieveNote,
  unArchieve,
  addNoteToTrash,
  addArchieveToTrash,
  noteToTrash,
  archieveToTrash,
  restoreTrash,
  deletePermanently,
  restoreFromTrash,
  deleteTrashPermannently,
} from "../../features/Notes/NotesSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Notes({ ele, noteType }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.User.User);
  const navigate = useNavigate();

  return (
    <div className="note-card" style={{ backgroundColor: `${ele?.color}` }}>
      <div className="note-r1 ">
        <h3>{ele?.title}</h3>
        {noteType == "notes" && (
          <i
            class="fas fa-thumbtack"
            style={ele?.isPinned ? { color: "black" } : {}}
            onClick={() => {
              dispatch(pinUnpin(ele?._id));
              const dataToBeSent = {
                id: ele._id,
                data: {
                  isPinned: !ele.isPinned,
                },
                token,
              };
              dispatch(updatedNote(dataToBeSent));
            }}
          ></i>
        )}
      </div>
      <div className="note-r2">
        <h4>{ele?.description}</h4>
      </div>
      <div className="note-r3 modal-card-r4">
        {ele?.label?.length > 0 && ele.label.map((ele) => <span>{ele}</span>)}
      </div>
      <div className="note-r4 ">
        {noteType == "notes" ? (
          <i
            class="fas fa-archive"
            onClick={() => {
              const dataToBeSent = {
                id: ele._id,
                token,
              };
              toast.success("Note has been archieved", { autoClose: 3000 });
              dispatch(addToArchieve(ele._id));
              dispatch(archieveNote(dataToBeSent));
            }}
          ></i>
        ) : noteType == "archieve" ? (
          <i
            class="fas fa-archive rotate180"
            onClick={() => {
              const dataToBeSent = {
                id: ele._id,
                token,
              };
              toast.success("Note has been Unarchieved", { autoClose: 3000 });
              dispatch(unArchieve(ele._id));
              dispatch(unArchieveNote(dataToBeSent));
            }}
          ></i>
        ) : (
          ""
        )}
        {noteType != "trash" && (
          <i
            class="fas fa-trash"
            onClick={() => {
              let dataToBeSent = {
                id: ele._id,
                token,
              };
              if (noteType == "notes") {
                toast.error("Note has been trashed", { autoClose: 3000 });
                dispatch(addNoteToTrash(ele._id));
                dispatch(noteToTrash(dataToBeSent));
              } else {
                toast.error("Note has been trashed", { autoClose: 3000 });
                dispatch(addArchieveToTrash(ele._id));
                dispatch(archieveToTrash(dataToBeSent));
              }
            }}
          ></i>
        )}
        {noteType != "trash" && (
          <i
            class="fas fa-pencil-alt"
            onClick={() =>
              navigate(`/modal/${ele._id}?update=true`, {
                state: { from: noteType },
              })
            }
          ></i>
        )}
        {noteType == "trash" && (
          <div className="note-r5 ">
            {
              <h3
                onClick={() => {
                  const dataToBeSent = {
                    id: ele._id,
                    token,
                  };
                  toast.error("Note has deleted permanently", {
                    autoClose: 3000,
                  });
                  dispatch(deleteTrashPermannently(dataToBeSent));
                  dispatch(deletePermanently(ele._id));
                }}
              >
                Delete
              </h3>
            }
            {
              <h3
                onClick={() => {
                  let dataToBeSent = {
                    id: ele._id,
                    token,
                  };
                  toast.success("Note has restored successfully", {
                    autoClose: 3000,
                  });
                  dispatch(restoreFromTrash(dataToBeSent));
                  dispatch(restoreTrash(ele._id));
                }}
              >
                Restore
              </h3>
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
