import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  description: z.string(),
  descriptionShort: z.string(),
  image: z.string().optional(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().optional(),
});

// يستخدم في PUT
export const updateProjectSchema = projectSchema.partial();

// Types
export type CreateProjectInput = z.infer<typeof projectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;