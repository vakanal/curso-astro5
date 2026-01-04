import { defineCollection, z } from "astro:content";
// z -> zod schema

const booksCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      img: image(),
      readtime: z.number(),
      description: z.string(),
      buy: z.object({
        spain: z.string().url(),
        usa: z.string().url(),
      }),
    }),
});

export const collections = { books: booksCollection };
