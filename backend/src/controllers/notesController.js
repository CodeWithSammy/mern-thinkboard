import Note from "../models/Note.js"; // Assuming you have a Note model defined
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // Fetch all notes sorted by creation date
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching getAllNotes:", error);
    res.status(500).json({ message: "Error fetching notes" });
  }
};
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id); // Fetch a specific note by ID
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching getNoteById:", error);
    res.status(500).json({ message: "Error fetching note" });
  }
};
export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body; // Assuming the note has title and content
    const note = new Note({ title, content });
    const savedNote = await note.save(); // Save the note to the database
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Error creating note" });
  }
};
export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body; // Assuming the note has title and content
    const updatedNode = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true, // Return the updated document
      }
    );
    if (!updatedNode) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: updatedNode });
  } catch (error) {
    console.error("Error in updateNoteController note:", error);
    res.status(500).json({ message: "Server internal error" });
  }
};
export const deleteNotes = async (req, res) => {
  try {
    const { title, content } = req.body; // Assuming the note has title and content
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNotes note:", error);
    res.status(500).json({ message: "Error deleting note" });
  }
};
