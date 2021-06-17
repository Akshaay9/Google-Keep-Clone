import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Notes from "../../Components/Notes/Notes";
function Search() {
  const { searchedNote } = useSelector((state) => state.Notes);
  console.log(searchedNote);
  return (
    <div>
      <Link to="/">
        <h3 className="heading">
          <i style={{ marginRight: "1rem" }} class="fas fa-backward"></i>Go Back
        </h3>
        <div className="notes-container pinned-notes-container">
          {searchedNote?.length > 0 &&
            searchedNote.map((ele) => <Notes ele={ele} noteType={"search"} />)}
        </div>
      </Link>
    </div>
  );
}

export default Search;
