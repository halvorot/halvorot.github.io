import { z, defineCollection } from 'astro:content';

export const collections = {
  'certifications': defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
      name: z.string(),
      image: image(),
      certificateLink: z.string(),
    }),
  }),
};