import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../models/postModel";
import User from "../models/userModel";
import { createPost } from "../services/postServices";
// פונקציה להרשמה של משתמש חדש
export const createdPost = async (req: Request, res: Response) => {
  const { title, content,author } = req.body;

  try {
    await createPost({
      title,
      content,
      author,
    });
    res.status(201).json({ message: "נרשמת בהצלחה  " });
  } catch (error) {
    console.log(error);
    res.status(400).json("תקלה בהרשמה");
  }
};


// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};



// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


