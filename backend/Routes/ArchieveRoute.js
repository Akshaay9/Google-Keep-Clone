import express from "express";
import {
  getAllArchievePosts,
  moveToPost,
  moveToTrash,
  updateArchieve,
} from "../Controllers/ArchieveController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualArchieve } from "../MiddleWears/IndividualArchieve.js";
const router = express.Router();


router.param("postID", getIndividualArchieve);

// private
// get
// get all archieved

router.get("/", privateRoute, getAllArchievePosts);

// private
// move
// delete and move to post
router.post("/:postID/addToPost", privateRoute, moveToPost);

// private
// move
// delete and move to trahs
router.post("/:postID/addToTrash", privateRoute, moveToTrash);

// private
// post
// update individual post
router.post("/:postID", privateRoute, updateArchieve);

export default router;
