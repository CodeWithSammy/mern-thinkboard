import mongoose from "mongoose";

// 1= schema definition
// 2= model creation based on the schema
// 3= export the model
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Note = mongoose.model("Note", noteSchema);
export default Note;
