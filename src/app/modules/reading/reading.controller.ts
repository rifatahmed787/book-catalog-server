import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { IReading } from './reading.interface'
import { ReadingServices } from './reading.services'

// post review]
const addToRead = catchAsync(async (req: Request, res: Response) => {
  const { ...wread_data } = req.body
  const result = await ReadingServices.ad_to_read(wread_data)

  sendResponse<IReading, null>(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: 'Book added in reading list successfully !',
  })
})

// getBookReviews
const getReadingList = catchAsync(async (req: Request, res: Response) => {
  const result = await ReadingServices.get_reading_list_by_user_id(
    req.query?.user_id as string
  )

  sendResponse<IReading[], null>(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: 'Reading List',
  })
})

export const ReadingController = {
  addToRead,
  getReadingList,
}
