import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { colors } from "../../Colors";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Stack,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedNote,
  updateNoteLocally,
  uploadNote,
} from "../../features/Notes/NotesSlice";
function PostModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.User);
  const { labels, notes } = useSelector((state) => state.Notes);
  const prevPath = location?.state?.from;

  console.log(prevPath);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "white",
    isPinned: false,
    label: [],
  });

  const cleanUp = () => {
    setFormData({
      title: "",
      description: "",
      color: "white",
      isPinned: false,
      label: [],
    });
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modalContainer")) {
      navigate("/");
    }
  };

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
    const dataToBeSent = {
      id,
      data: formData,
      token,
    };
    if (location?.search?.split("=")[1] == "true") {
      if (prevPath == "notes") {
        dispatch(updatedNote(dataToBeSent));
        dispatch(updateNoteLocally({ id, data: formData }));
      } else {
      }
    } else {
      dispatch(uploadNote(dataToBeSent));
    }

    cleanUp();
    navigate("/");
  };

  useEffect(() => {
    if (location?.search?.split("=")[1] == "true") {
      let updatableNote = notes?.find((ele) => ele._id == id);
      setFormData((ele) => ({
        title: updatableNote?.title || "",
        description: updatableNote?.description || "",
        color: updatableNote?.color || "white",
        isPinned: updatableNote?.isPinned || false,
        label: updatableNote?.label || [],
      }));
    }
  }, [location, notes]);

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
                      {labels?.length > 0 &&
                        labels?.map((ele) => (
                          <div className="inputLabelCheckbox ">
                            <label htmlFor="">{ele.text}</label>
                            <input
                              type="checkbox"
                              checked={formData.label.includes(ele.text)}
                              onClick={() => addLabel(ele.text)}
                            />
                          </div>
                        ))}
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <button className="formDataCTA" onClick={() => formHandler()}>
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
