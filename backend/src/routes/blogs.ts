import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blog.controller.ts";
import authMiddleware from "../middleware/authMiddleware.ts";

const router = Router();

type SlugParams = {
  slug: string;
};

// GET all blogs
router.get("/", getBlogs);

// GET single blog
router.get<SlugParams>("/:slug", getSingleBlog);

// POST create blog
router.post("/", authMiddleware, createBlog);

// PUT update blog
router.put<SlugParams>("/:slug", authMiddleware, updateBlog);

// DELETE blog
router.delete<SlugParams>("/:slug", authMiddleware, deleteBlog);

export default router;
