import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { IWish } from './wish.interface'
import { WishServices } from './wish.services'

// post review]
const addToWish = catchAsync(async (req: Request, res: Response) => {
  const { ...wish_data } = req.body
  const result = await WishServices.ad_to_wish(wish_data)

  sendResponse<IWish, null>(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: 'Book added in wish list successfully !',
  })
})

// getBookReviews
const getWishList = catchAsync(async (req: Request, res: Response) => {
  const result = await WishServices.get_wish_list_by_user_id(
    req.query?.user_id as string
  )

  sendResponse<IWish[], null>(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: 'Wish list ',
  })
})

export const WishController = {
  addToWish,
  getWishList,
}
