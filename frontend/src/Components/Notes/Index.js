import React, { useEffect, useState } from "react";
import "./App.css";
import Notes from "./Notes";
import { useDispatch, useSelector } from "react-redux";
function Index() {
  const { notes } = useSelector((state) => state.Notes);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const[notPinnedNotes,setNotPinnedNotes]=useState([])

  useEffect(() => {
    const pinnedNotes = notes?.filter((ele) => ele.isPinned == true);
    setPinnedNotes(pinnedNotes);
    const unpinnedNotes = notes?.filter((ele) => ele.isPinned == false);
    setNotPinnedNotes(unpinnedNotes);
  }, [notes]);
  return (
    <div>
      <div className="pinnedNotes">
        {pinnedNotes.length > 0 && (
          <>
            <h3>Pinned Notes</h3>
            <div className="notes-container pinned-notes-container">
              {pinnedNotes?.length > 0 &&
                pinnedNotes.map((ele) => <Notes ele={ele} />)}
            </div>
          </>
        )}
      </div>
      <div className="pinnedNotes">
        {notPinnedNotes.length > 0 && (
          <>
            <h3>UnPinned Notes</h3>
            <div className="notes-container pinned-notes-container">
              {notPinnedNotes?.length > 0 &&
                notPinnedNotes.map((ele) => <Notes ele={ele} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
