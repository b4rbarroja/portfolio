import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blog.controller.ts";

const router = Router();

type SlugParams = {
  slug: string;
};

// GET all blogs
router.get("/", getBlogs);

// GET single blog
router.get<SlugParams>("/:slug", getSingleBlog);

// POST create blog
router.post("/", createBlog);

// PUT update blog
router.put<SlugParams>("/:slug", updateBlog);

// DELETE blog
router.delete<SlugParams>("/:slug", deleteBlog);

export default router;