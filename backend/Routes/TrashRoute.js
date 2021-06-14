import express from "express";
import { trashedPosts } from "../Controllers/TrashController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();

// private
// get
// get all archieved

router.get("/",privateRoute,trashedPosts)


export default router;