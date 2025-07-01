import express from "express"
import { createUser, getUsers, loginUser } from "../controllers/usersController.js"

const router = express.Router();

router.get("/", getUsers)
router.post("/login", loginUser)
router.post('/register', createUser)

export default router;
