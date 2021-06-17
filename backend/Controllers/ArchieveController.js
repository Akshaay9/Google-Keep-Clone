import Post from "../Models/Post.model.js";
import pkg from "lodash";
import Archieve from "../Models/Archive.model.js";
import Trash from "../Models/Trash.model.js";
const { extend } = pkg;

export const getAllArchievePosts = async (req, res) => {
  const allPosts = await Archieve.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};

export const updateArchieve = async (req, res) => {
  let { individualPost } = req;
  let updatedPost = req.body;
  individualPost = extend(individualPost, updatedPost);
  await individualPost.save();
  return res.status(200).json(individualPost);
};

export const moveToTrash = async (req, res) => {
  let { individualPost } = req;
  const newTrash = new Trash({
    title: individualPost.title,
    description: individualPost.description,
    color: individualPost.color,
    label: individualPost.label,
    user: req.user.id,
    isPinned: false,
    location: "archieve",
  });
  await newTrash.save();
  await Archieve.findByIdAndDelete(individualPost._id);
  const allPosts = await Trash.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};

// unarchieve
export const moveToPost = async (req, res) => {
  let { individualPost } = req;
  const newArchieve = new Post({
    title: individualPost.title,
    description: individualPost.description,  
    color: individualPost.color,
    label: individualPost.label,
    user: req.user.id,
    isPinned: false,
  });
  await newArchieve.save();
  await Archieve.findByIdAndDelete(individualPost._id);
  const allPosts = await Post.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};
