import mongoose from 'mongoose'
import { REQUEST_STATUS_CODE } from '..'
import { IRequest, IRequestModel } from '.'

const RequestSchema = new mongoose.Schema<IRequest, IRequestModel>(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [...REQUEST_STATUS_CODE],
      required: true,
      default: 'Pending',
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

// RequestSchema.index({
//   'enableWeek.Sun.startTime': -1,
//   'enableWeek.Sun.endTime': -1,
// })

export const Request = mongoose.model<IRequest, IRequestModel>(
  'Request',
  RequestSchema
)
