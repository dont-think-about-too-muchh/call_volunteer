// Create the schema
import mongoose from 'mongoose'
import { DateTime } from 'luxon'
import { DAYS_OF_WEEK, IVolunteer, IVolunteerModel } from '.'

const VolunteerSchema = new mongoose.Schema<IVolunteer, IVolunteerModel>(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    startTime: {
      type: Date,
      default: DateTime.local(2017, 3, 12, 10, {
        zone: 'Asia/Seoul',
      }).toJSDate(),
    },
    endTime: {
      type: Date,
      default: DateTime.local(2017, 3, 12, 20, {
        zone: 'Asia/Seoul',
      }).toJSDate(),
    },
    days: {
      type: [String],
      enum: DAYS_OF_WEEK,
      default: [...DAYS_OF_WEEK],
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

// UserSchema.statics.findByFirstName = findByFirstName

// Create and export user model
export const Volunteer = mongoose.model<IVolunteer, IVolunteerModel>(
  'Volunteer',
  VolunteerSchema
)
