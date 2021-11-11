import mongoose from "mongoose";

const trashSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    color: {
      type: String,
      default: "white",
    },
    location: {
      type: String,
      required: true,
    },
    label: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Trash = mongoose.model("Trash", trashSchema);
export default Trash;
