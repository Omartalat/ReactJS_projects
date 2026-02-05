import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile
} from "../controllers/authController";

import {block} from '../middleware/authMiddleware'

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.get('/profile', block, getUserProfile)

export default router;
