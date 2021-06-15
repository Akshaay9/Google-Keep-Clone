import React from "react";
import "./App.css";
function PostModal() {
  return (
    <div>
      <div className="modalContainer">
        <div className="modal-card ">
          <div className="modal-card-r1 ">
            <input type="text" placeholder="Title" />
            <i class="fas fa-thumbtack"></i>
          </div>
          <div className="modal-card-r2">
            <textarea type="text" placeholder="Take a note..." />
          </div>
          <div className="modal-card-r3 ">
            <div className="modal-card-r3-items">
              <i class="fas fa-palette"></i>
              <h5>Add label</h5>
            </div>
            <button>Add Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
