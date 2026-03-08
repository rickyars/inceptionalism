import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    type: z.enum(['1-1', 'collection', 'collab', 'performance', 'in-development']),
    status: z.enum(['released', 'in-development', 'archived']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    supplemental: z.array(z.object({
      label: z.string(),
      images: z.array(z.string()),
    })).default([]),
    links: z.object({
      foundation: z.string().url().optional(),
      opensea: z.string().url().optional(),
      twitter: z.string().url().optional(),
      transient: z.string().url().optional(),
    }).optional(),
    featuredIn: z.string().optional(),
    collab: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { work };
