import mongoose from "mongoose";

const trashSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      trype: String,
      default: "white",
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
