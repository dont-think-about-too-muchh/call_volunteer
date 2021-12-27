// Create the schema
import mongoose from 'mongoose'
import { IVolunteer, IVolunteerModel } from '.'

const VolunteerSchema = new mongoose.Schema<IVolunteer, IVolunteerModel>(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
    },
    enableWeek: {
      type: Map,
      of: [{ startTime: Number, endTime: Number }],
      //   of: [new mongoose.Schema({ startTime: Number, endTime: Number })],
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
