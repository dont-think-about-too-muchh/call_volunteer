import mongoose from 'mongoose'
import { REQUEST_STATUS_CODE } from '..'

export type RequestStatus = typeof REQUEST_STATUS_CODE[number]

export interface IRequest {
  userId: string
  status: RequestStatus
}

export interface IRequestDoc extends IRequest, mongoose.Document {
  // method 정의
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRequestModel extends mongoose.Model<IRequestDoc> {}
