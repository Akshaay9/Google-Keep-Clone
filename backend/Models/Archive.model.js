import mongoose from "mongoose";

const archieveSchema = mongoose.Schema(
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

const Archieve = mongoose.model("Archieve", archieveSchema);
export default Archieve;
