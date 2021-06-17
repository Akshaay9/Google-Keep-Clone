import Post from "../Models/Post.model.js";
import pkg from "lodash";
import Archieve from "../Models/Archive.model.js";
import Trash from "../Models/Trash.model.js";
const { extend } = pkg;

export const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};

export const addPost = async (req, res) => {
  const { title, description, color, label, isPinned } = req.body;
  const { user } = req;

  const newPost = {
    title,
    description,
    color,
    label,
    isPinned,
    user: user.id,
  };
  const savedNewPost = new Post(newPost);
  await savedNewPost.save();
  return res.status(200).json(savedNewPost);
};

export const updatePost = async (req, res) => {
  let { individualPost } = req;
  let updatedPost = req.body;
  individualPost = extend(individualPost, updatedPost);
  await individualPost.save();
  return res.status(200).json(individualPost);
};

export const moveToArchieves = async (req, res) => {
  let { individualPost } = req;
  const newArchieve = new Archieve({
    title: individualPost.title,
    description: individualPost.description,
    color: individualPost.color,
    label: individualPost.label,
    user: req.user.id,
  });
  await newArchieve.save();
  await Post.findByIdAndDelete(individualPost._id);
  const allPosts = await Archieve.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};
export const moveToTrash = async (req, res) => {
  let { individualPost } = req;
  const newTrash = new Trash({
    title: individualPost.title,
    description: individualPost.description,
    color: individualPost.color,
    label: individualPost.label,
    user: req.user.id,
    location: "Post",
  });
  await newTrash.save();
  await Post.findByIdAndDelete(individualPost._id);
  const allPosts = await Trash.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};
