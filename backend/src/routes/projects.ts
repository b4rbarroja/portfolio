import { Router, type Request, type Response } from "express";
import { createProject, deleteProject, getProjects, getSingleProject, updateProject } from "../controllers/project.controller.ts";
import authMiddleware from "../middleware/authMiddleware.ts"

const router = Router();

type SlugParams = {
  slug: string;
};

// GET all projects
router.get("/",getProjects);


// GET single project
router.get<SlugParams>("/:slug", getSingleProject);


// POST create project
router.post("/",authMiddleware , createProject);

// PUT update project
router.put<SlugParams>("/:slug",authMiddleware ,updateProject);


// DELETE project
router.delete<SlugParams>("/:slug",authMiddleware ,deleteProject);

export default router;