import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    url: z.string().optional(),
    badge: z.string().optional(),
    isFeatured: z.boolean().default(true),
  }),
});

export const collections = {
  services,
};
