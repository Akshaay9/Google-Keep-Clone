import Label from "../Models/LabelModel.js";
import pkg from "lodash";
const { extend } = pkg;

export const getAllLabel = async (req, res) => {
  const allLabel = await Label.find({ user: req.user.id });
  return res.status(200).json(allLabel);
};

export const addLabel = async (req, res) => {
  const { text } = req.body;

  const savedLabel = new Label({
    user: req.user.id,
    text,
  });

  await savedLabel.save();
  const allLabel = await Label.find({ user: req.user.id });
  return res.status(200).json(allLabel);
};

export const deleteLabel = async (req, res) => {
  let { individualLabel } = req;
  await Label.findByIdAndDelete(individualLabel._id);
  const allLabel = await Label.find({ user: req.user.id });
  return res.status(200).json(allLabel);
};

export const updateLabel = async (req, res) => {
  let { individualLabel } = req;
  let updatedLabel = req.body;
  individualLabel = extend(individualLabel, updatedLabel);
  await individualLabel.save();
  const allLabel = await Label.find({ user: req.user.id });
  return res.status(200).json(allLabel);
};
