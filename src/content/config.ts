import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    order: z.number().optional().default(999), // Add order field with default value
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