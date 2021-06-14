import Post from "../Models/Post.model.js";
import pkg from "lodash";
import Trash from "../Models/Trash.model.js";
const { extend } = pkg;

export const trashedPosts = async (req, res) => {
  const allPosts = await Trash.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};

export const deleteTrashPost = async (req, res) => {
  const { individualPost } = req;
  await Trash.findByIdAndDelete(individualPost._id);
};
