import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content', // Changed to 'content' to handle MDX
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional(),
    // For series of posts
    series: z.object({
      name: z.string(),
      order: z.number()
    }).optional(),
  })
});

export const collections = {
  projects,
  posts,
};