import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Notes from "../../Components/Notes/Notes";
function Trash() {
  const { trash } = useSelector((state) => state.Notes);
  return (
    <div>
      <h3 className="heading">Trash</h3>
      <div className="notes-container pinned-notes-container">
        {trash?.length > 0 &&
          trash.map((ele) => <Notes ele={ele} noteType={"trash"} />)}
      </div>
    </div>
  );
}

export default Trash;
