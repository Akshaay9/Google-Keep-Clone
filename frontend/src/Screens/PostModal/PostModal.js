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
  Stack,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
function PostModal() {
  const navigate = useNavigate();
  const closeModal = (e) => {
    if (e.target.classList.contains("modalContainer")) {
      navigate("/");
    }
  };

  const labels = ["new", "office", "home", "make"];

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
          <div className="modal-card-r4 ">
           <span>hey <i class="fas fa-times"></i></span>
           <span>hey <i class="fas fa-times"></i></span>
           <span>hey <i class="fas fa-times"></i></span>
           <span>hey <i class="fas fa-times"></i></span>
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
                  <PopoverBody>
                    <Input
                      placeholder="Enter a new label..."
                      size="xs"
                      variant="filled"
                    />
                    <Stack spacing={1} direction="column">
                      {labels.map((ele) => (
                        <Checkbox  >{ele}</Checkbox>
                      ))}
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <button>Add Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
