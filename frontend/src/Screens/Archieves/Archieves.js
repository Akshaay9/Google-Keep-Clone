import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Notes from "../../Components/Notes/Notes";
function Archieves() {
  const { archieves } = useSelector((state) => state.Notes);
  return (
    <div>
      <h3 className="heading">Archieves</h3>
      <div className="notes-container pinned-notes-container">
        {archieves?.length > 0 &&
          archieves.map((ele) => <Notes ele={ele} noteType={"archieve"} />)}
      </div>
    </div>
  );
}

export default Archieves;
