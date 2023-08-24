import requestValidationHandler from '../../middlewares/requestValidationHandler'
import { ReadingController } from './reading.controller'

import express from 'express'
import { review_post_zod_schema } from './reading.validation'
import authHandler from '../../middlewares/authHandler'

const router = express.Router()

router.post(
  '/',
  requestValidationHandler(review_post_zod_schema),
  authHandler(),
  ReadingController.addToRead
)

router.get('/', authHandler(), ReadingController.getReadingList)

export const ReadingRoute = router
