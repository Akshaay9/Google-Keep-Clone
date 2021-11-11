import express from "express";
import { deleteTrashPost, restoreTrash, trashedPosts } from "../Controllers/TrashController.js";
import privateRoute from "../MiddleWears/Authentication.js";

import { getIndividualTrash } from "../MiddleWears/IndividudalTrashPost.js";
const router = express.Router();

router.param("postID", getIndividualTrash);

// private
// get
// get all archieved

router.get("/", privateRoute, trashedPosts);

// private
// get
// get all archieved

router.delete("/:postID", privateRoute, deleteTrashPost);

// private
// get
// get all archieved

router.post("/:postID/restore", privateRoute, restoreTrash);

export default router;
