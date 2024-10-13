import { Router } from "express";
import {
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";
import { createdPost } from "../controllers/postController";

const postRouter = Router();

postRouter.post("/", createdPost);
// postRouter.get("/", getPosts);
// postRouter.get("/:id", getPost);
// postRouter.put("/:id", updatePost);
// postRouter.delete("/:id", deletePost);
// postRouter.post("/:id/comments", addComment);

export default postRouter;
