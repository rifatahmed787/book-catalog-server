import { z } from 'zod'

export const review_post_zod_schema = z.object({
  body: z.object({
    book: z.number({ required_error: 'Book is required' }),
  }),
})
