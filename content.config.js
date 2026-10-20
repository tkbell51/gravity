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
    team: defineCollection({
      type: 'page',
      source: 'team/*.md',
      schema: z.object({
        name: z.string(),
        credentials: z.string().optional(),
        // Shown on the team card
        role: z.string(),
        // Shown on the profile page instead of role, e.g. a full intern title
        profileRole: z.string().optional(),
        // licensed | pre-licensed | intern (see TEAM_TIERS in utils/team.js)
        tier: z.enum(['licensed', 'pre-licensed', 'intern']),
        // Sort order within a tier (lower first)
        order: z.number().default(100),
        // Photo in public/img/team/ (falls back to initials)
        img: z.string().optional(),
        location: z.string().optional(),
      }),
    }),
  },
})
