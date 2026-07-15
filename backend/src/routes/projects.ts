import { Router, type Request, type Response } from "express";
import { createProject, deleteProject, getProjects, getSingleProject, updateProject } from "../controllers/project.controller.ts";

const router = Router();

type SlugParams = {
  slug: string;
};

// GET all projects
router.get("/",getProjects);


// GET single project
router.get<SlugParams>("/:slug", getSingleProject);


// POST create project
router.post("/", createProject);

// PUT update project
router.put<SlugParams>("/:slug", updateProject);


// DELETE project
router.delete<SlugParams>("/:slug", deleteProject);

export default router;