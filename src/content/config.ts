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
    date: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
  posts,
};