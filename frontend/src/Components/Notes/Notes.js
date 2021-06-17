import React from "react";
import { pinUnpin, updatedNote } from "../../features/Notes/NotesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Notes({ ele, noteType }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.User);
  const navigate = useNavigate();
  console.log(noteType);
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
          <i class="fas fa-archive"></i>
        ) : noteType == "archieve" ? (
          <i class="fas fa-archive rotate180"></i>
        ) : (
          ""
        )}
        <i class="fas fa-trash"></i>
        <i
          class="fas fa-pencil-alt"
          onClick={() =>
            navigate(`/modal/${ele._id}?update=true`, {
              state: { from: noteType },
            })
          }
        ></i>
      </div>
    </div>
  );
}

export default Notes;
