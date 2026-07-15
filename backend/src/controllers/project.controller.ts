import type { Request, Response } from "express";
import prisma from "../lib/prisma.ts";
import {
  projectSchema,
  updateProjectSchema,
} from "../schemas/project.schema.ts";

type SlugParams = {
  slug: string;
};

export const getProjects = async (
  req: Request,
  res: Response
) => {
  const projects = await prisma.project.findMany();

  res.json(projects);
};

export const getSingleProject = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const project = await prisma.project.findUnique({
    where: {
      slug,
    },
  });

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  res.json(project);
};

export const createProject = async (
  req: Request,
  res: Response
) => {
  const result = projectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid data",
      errors: result.error.issues,
    });
  }

  const project = await prisma.project.create({
    data: result.data,
  });

  res.status(201).json(project);
};

export const updateProject = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const result = updateProjectSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid data",
      errors: result.error.issues,
    });
  }

  const project = await prisma.project.update({
    where: {
      slug,
    },
    data: result.data,
  });

  res.json(project);
};

export const deleteProject = async (
  req: Request<SlugParams>,
  res: Response
) => {
  const { slug } = req.params;

  const project = await prisma.project.delete({
    where: {
      slug,
    },
  });

  res.json({
    message: "Project deleted successfully",
    project,
  });
};