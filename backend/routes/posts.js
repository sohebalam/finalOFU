import express from "express"
import { protect } from "../middleware/protect.js"

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getLogin,
} from "../controllers/posts.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/login", getLogin)
router.post("/", createPost)
router.get("/:id", getPost)
router.patch("/:id", protect, updatePost)
router.delete("/:id", protect, deletePost)
router.patch("/:id/likePost", protect, likePost)

export default router
