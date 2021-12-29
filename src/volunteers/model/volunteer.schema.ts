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
      of: [
        new mongoose.Schema({
          startTime: Number,
          endTime: Number,
        }),
      ],
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

VolunteerSchema.index({
  'enableWeek.Sun.startTime': -1,
  'enableWeek.Sun.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Mon.startTime': -1,
  'enableWeek.Mon.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Tue.startTime': -1,
  'enableWeek.Tue.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Thu.startTime': -1,
  'enableWeek.Thu.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Wed.startTime': -1,
  'enableWeek.Wed.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Fri.startTime': -1,
  'enableWeek.Fri.endTime': -1,
})
VolunteerSchema.index({
  'enableWeek.Sat.startTime': -1,
  'enableWeek.Sat.endTime': -1,
})

// UserSchema.statics.findByFirstName = findByFirstName

// Create and export user model
export const Volunteer = mongoose.model<IVolunteer, IVolunteerModel>(
  'Volunteer',
  VolunteerSchema
)
