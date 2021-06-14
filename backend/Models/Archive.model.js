import mongoose from "mongoose";

const archieveSchema = mongoose.Schema(
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
