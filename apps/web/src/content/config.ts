import { defineCollection, z } from "astro:content";

const legalInfo = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { legalInfo };
