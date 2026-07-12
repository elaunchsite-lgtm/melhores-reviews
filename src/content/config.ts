import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featuredImage: z.string().optional(),
    author: z.string().optional(),
    rating: z.number().optional(),
  }),
});

export const collections = { blog };
