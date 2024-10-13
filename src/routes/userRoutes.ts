import { Router } from "express";
import {getUser, getUsers, getUsersWithPosts, updatToeUser, deleteUser } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const userRouter = Router();


userRouter.get("/:id",  getUser);
userRouter.get("/", getUsers);
userRouter.get("/", getUsersWithPosts);
userRouter.put("/:id",authMiddleware, updatToeUser);
userRouter.delete("/:id",authMiddleware, deleteUser);

export default userRouter;
