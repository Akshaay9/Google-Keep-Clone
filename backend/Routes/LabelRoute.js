import express from "express";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividuaLabel } from "../MiddleWears/IndividualLabel.js";

import { addLabel, deleteLabel, getAllLabel, updateLabel } from "../Controllers/LabelController.js";
const router = express.Router();

router.param("labelID", getIndividuaLabel);


// get all label
router.get("/", privateRoute, getAllLabel)


// post new label
router.post("/", privateRoute, addLabel)

// update new label
router.post("/:labelID",privateRoute,updateLabel)

// delete new label
router.delete("/:labelID",privateRoute,deleteLabel)

export default router;
