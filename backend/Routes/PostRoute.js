import express from "express";
import {
  addPost,
  getAllPosts,
  moveToArchieves,
  moveToTrash,
  updatePost,
} from "../Controllers/PostController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();

router.param("postID", getIndividualPost);

// private
// get
// get all posts from user
router.get("/", privateRoute, getAllPosts);

// private
// post
//  add new post from user
router.post("/", privateRoute, addPost);

// private
// move
// delete and move to archieve
router.post("/:postID/addToArchieve", privateRoute, moveToArchieves);

// private
// move
// delete and move to archieve
router.post("/:postID/addToTrash", privateRoute, moveToTrash);


// private
// post
// update individual post
router.post("/:postID", privateRoute, updatePost);



export default router;
