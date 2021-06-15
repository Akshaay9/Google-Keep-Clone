import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { colors } from "../../Colors";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
function PostModal() {
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (e.target.classList.contains("modalContainer")) {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="modalContainer" onClick={(e) => closeModal(e)}>
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
              <div className="color-pallet">
                <i class="fas fa-palette"></i>
                <div className="colors">
                  {colors.map((ele) => (
                    <div className="indi-colors">
                      <div
                        style={{ color: `${ele}`, backgroundColor: `${ele}` }}
                      >
                        hey
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Popover>
                <PopoverTrigger>
                  <h5>Add label</h5>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>Label Note!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
