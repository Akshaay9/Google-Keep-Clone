import Label from "../Models/LabelModel.js";
export const getIndividuaLabel = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid Post id" });
    }
    const individualLabel = await Label.findById(id);
    if (!individualLabel) {
      res.status(400).json({ error: "individualLabel not found" });
    }
    req.individualLabel = individualLabel;
    next();
  } catch (error) {
    console.log(error);
  }
};
