import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        img: z.string(),
        alt: z.string(),
        category: z.string(),
        date: z.date(),
        author: z.object({
          name: z.string(),
          img: z.string(),
        }),
      }),
    }),
  },
})
