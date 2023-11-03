import { z, defineCollection } from 'astro:content';

export const collections = {
  'certifications': defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
      name: z.string(),
      image: image(),
      certificateLink: z.string(),
    }),
  }),
  'experience': defineCollection({
    type: 'data',
    schema: z.object({
      startDate: z.date(),
      endDate: z.date().optional(),
      heading: z.string(),
      subHeading: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};