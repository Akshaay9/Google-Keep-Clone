import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, searchNotes } from "../../features/Notes/NotesSlice";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
      border: "1px solid #f1f3f4",
    },
  },
}));
function NavBar({ setOpen, isOpen }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const classes = useStyles();

  useEffect(() => {
    if (input.length > 0) {
      dispatch(searchNotes(input));
    } else {
      dispatch(clearSearch());
    }
  }, [input]);

  return (
    <div>
      <div class="nav ">
        <div class="nav_left ">
          <div className="desktopHide">
            <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
          </div>
          <div class="nav_logo">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              alt=""
            />
          </div>
          <div class="nav_name desktopHide">
            <h3>Keep</h3>
          </div>
        </div>
        <div class="nav_center ">
          <i class="fas fa-search"></i>
          <Link to="/search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />
          </Link>
        </div>
        <div class="nav_right ">
          <Avatar
            variant="rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg"
            className={classes.root}
          />
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
