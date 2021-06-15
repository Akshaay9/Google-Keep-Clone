import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { colors } from "../../Colors";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
function PostModal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "white",
    isPinned: false,
    label: [],
  });

  const closeModal = (e) => {
    if (e.target.classList.contains("modalContainer")) {
      navigate("/");
    }
  };

  const labels = ["new", "office", "home", "make"];

  const addLabel = (tag) => {
    setFormData((ele) => ({
      ...ele,
      label: formData.label.includes(tag)
        ? ele.label.filter((ele) => ele != tag)
        : [tag, ...ele.label],
    }));
  };

  const removeLabel = (tag) => {
    setFormData((ele) => ({
      ...ele,
      label: ele.label.filter((ele) => ele != tag),
    }));
  };

  const formHandler = () => {
  console.log(formData)
}

  return (
    <div>
      <div className="modalContainer" onClick={(e) => closeModal(e)}>
        <div
          className="modal-card"
          style={{ backgroundColor: `${formData.color}` }}
        >
          <div className="modal-card-r1 ">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <i
              class="fas fa-thumbtack"
              style={formData.isPinned ? { color: "black" } : {}}
              onClick={() =>
                setFormData({ ...formData, isPinned: !formData.isPinned })
              }
            ></i>
          </div>
          <div className="modal-card-r2">
            <textarea
              type="text"
              placeholder="Take a note..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="modal-card-r4 ">
            {formData.label?.length > 0 &&
              formData.label.map((ele) => (
                <span>
                  {ele}
                  <i class="fas fa-times" onClick={() => removeLabel(ele)}></i>
                </span>
              ))}
          </div>
          <div className="modal-card-r3 ">
            <div className="modal-card-r3-items">
              <div className="color-pallet">
                <i class="fas fa-palette"></i>
                <div className="colors">
                  {colors.map((ele) => (
                    <div className="indi-colors">
                      <div
                        style={
                          formData.color == ele
                            ? { border: "1px solid black" }
                            : {}
                        }
                        style={{ color: `${ele}`, backgroundColor: `${ele}` }}
                        onClick={() => setFormData({ ...formData, color: ele })}
                      >
                        hey
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Popover>
                <PopoverTrigger>
                  <button>Add label</button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody>
                    <Input
                      placeholder="Enter a new label..."
                      size="xs"
                      variant="filled"
                    />
                    <Stack spacing={0} direction="column">
                      {labels.map((ele) => (
                        <div className="inputLabelCheckbox">
                          <label htmlFor="">{ele}</label>
                          <input
                            type="checkbox"
                            checked={formData.label.includes(ele)}
                            onClick={() => addLabel(ele)}
                          />
                        </div>
                      ))}
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <button className="formDataCTA" onClick={()=>formHandler()}>Add Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// {console.log(
//   formData.label.some((label) => label == ele)
// // )}

export default PostModal;
