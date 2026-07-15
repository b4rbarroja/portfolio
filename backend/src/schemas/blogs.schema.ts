import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters"),

  description: z
    .string()
    .min(10, "Description is too short"),

  descriptionShort: z
    .string()
    .min(10, "Short description is too short"),

  content: z
    .string()
    .min(50, "Content is too short"),

  image: z
    .string()
    .url("Image must be a valid URL")
    .optional(),

  type: z
    .string()
    .min(2, "Type is required"),

  readingTime: z
    .number()
    .int()
    .positive(),

  featured: z
    .boolean()
    .optional(),
});

export const updateBlogSchema = blogSchema.partial();

export type CreateBlogInput = z.infer<typeof blogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;