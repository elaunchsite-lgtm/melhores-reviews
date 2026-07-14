import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    rating: z.number().optional(),
    readTime: z.string().optional(),
    image: z.string().optional(),
    affiliateLink: z.string().optional(),
    affiliateStore: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog: blogCollection };
