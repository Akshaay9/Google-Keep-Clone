import Users from "../Models/User.Model.js";
import Post from "../Models/Post.model.js";
import pkg from "lodash";
const { extend } = pkg;

export const getAllPosts = async (req, res) => {
  const allPosts = await Post.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};

export const addPost = async (req, res) => {
  const { title, description, color, label } = req.body;
  const { user } = req;

  const newPost = {
    title,
    description,
    color,
    label,
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

export const deletePost = async (req, res) => {
  let { individualPost } = req;
  await Post.findByIdAndDelete(individualPost._id);
  const allPosts = await Post.find({ user: req.user.id });
  return res.status(200).json(allPosts);
};
