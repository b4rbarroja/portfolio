import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  description: z.string(),
  descriptionShort: z.string(),
  fullDescription: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  tags: z.string().optional(),
  image: z.string().optional(),
  githubUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
});

export const updateProjectSchema = projectSchema.partial();

export type CreateProjectInput = z.infer<typeof projectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
