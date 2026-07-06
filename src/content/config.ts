import { defineCollection, z } from "astro:content";

const artikel = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, "Idealnya di bawah 160 karakter untuk meta description"),
    date: z.date(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    author: z.string().default("Tim Sarana Nusa Pakan"),
  }),
});

export const collections = { artikel };
