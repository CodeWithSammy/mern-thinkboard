import express from 'express';
import { createNotes, deleteNotes, getNoteById,getAllNotes, updateNotes } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById); // Assuming you want to fetch a specific note by ID
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes); 
export default router;

