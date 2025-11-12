import { defineCollection, z } from "astro:content";

const legalInfo = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date().optional(),
    text: z.string().optional(),
  }),
});

export const collections = { legalInfo };
