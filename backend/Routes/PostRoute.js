import express from "express";
import { addPost, deletePost, getAllPosts, updatePost } from "../Controllers/PostController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();


router.route("postID",getIndividualPost)

// private
// get
// get all posts from user
router.get("/", privateRoute, getAllPosts);

// private
// post
//  add new post from user
router.post("/", privateRoute, addPost);


// private
// post
// update individual post
router.post("/:postID", privateRoute, updatePost);

// private
// delete
// delete post from user
router.delete("/all", privateRoute, deletePost);


export default router;
