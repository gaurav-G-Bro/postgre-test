import Router from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
const router = Router();

router.post("/create", createPost);
router.get("/", getAllPosts);
router.get("/:postId", getSinglePost);
router.patch("/update/:postId", updatePost);
router.delete("/delete/:postId", deletePost);

export default router;
