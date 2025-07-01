import express from "express"
import { createNote, getNoteByID, deleteNote, getAllNote, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNote)

router.get("/:id", getNoteByID )

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

export default router;