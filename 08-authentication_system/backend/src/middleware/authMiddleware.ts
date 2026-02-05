import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/User";
export interface Decoded {
  userId: string;
}

export async function block(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const token = req.cookies?.jwt;

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
    return;
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      res
        .status(500)
        .json({ message: "Server configuration error: JWT secret not set" });
      return;
    }
    const decoded = jwt.verify(token, jwtSecret) as Decoded;
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(401).json({ message: "Not authorized, user not found" });
      return;
    }
    req.user = user;
    next();
  } catch (error: unknown) {
    console.error("JWT verification failed:", error);
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
}
