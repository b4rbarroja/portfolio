import type { Request, Response } from "express";
import prisma from "../lib/prisma.ts";
import {
  blogSchema,
  updateBlogSchema,
} from "../schemas/blogs.schema.ts";

type SlugParams = {
  slug: string;
};

// GET all blogs
export const getBlogs = async (
  req: Request,
  res: Response
) => {
  const blogs = await prisma.blog.findMany();

  res.json(blogs);
};

// GET single blog
export const getSingleBlog = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  });

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }

  res.json(blog);
};

// POST create blog
export const createBlog = async (
  req: Request,
  res: Response
) => {
  const result = blogSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid data",
      errors: result.error.issues,
    });
  }

  const blog = await prisma.blog.create({
    data: result.data,
  });

  res.status(201).json(blog);
};

// PUT update blog
export const updateBlog = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const result = updateBlogSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid data",
      errors: result.error.issues,
    });
  }

  const blog = await prisma.blog.update({
    where: {
      slug,
    },
    data: result.data,
  });

  res.json(blog);
};

// DELETE blog
export const deleteBlog = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const blog = await prisma.blog.delete({
    where: {
      slug,
    },
  });

  res.json({
    message: "Blog deleted successfully",
    blog,
  });
};