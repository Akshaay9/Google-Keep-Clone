import mongoose from "mongoose";

const labelSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Text: {
    type: String,
    required: true,
  },
  isEditabel: {
    type: Boolean,
    default: false,
  },
});

const Label = mongoose.model("Label", labelSchema);
export default Label;
