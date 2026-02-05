import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/User";
import generateToken from "../utils/generateToken";

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public

export async function registerUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      generateToken(res, user._id.toString());
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
}


import bcrypt from "bcryptjs"; 


// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      
      generateToken(res, user._id.toString());

      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: (error as Error).message });
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Public
export const logoutUser = (req: Request, res: Response): void => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
};


export function getUserProfile(req: Request, res: Response): void {
  const user = {
    _id: req.user?._id,
    name: req.user?.name,
    email: req.user?.email,
  };

  res.status(200).json(user);
};
