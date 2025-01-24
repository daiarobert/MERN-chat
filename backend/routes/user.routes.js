import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import { getUserById, getUsers } from "../controllers/user.controller.js";

const router = express.Router();


// get the users for side menu
router.get("/",protectedRoute, getUsers);

// Route to get a user by ID
router.get("/:id", protectedRoute, getUserById);

export default router