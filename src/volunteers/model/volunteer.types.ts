import mongoose from 'mongoose'
import { DAYS_OF_WEEK } from '..'

export type Days = typeof DAYS_OF_WEEK[number]

// Create the interface
export type EnableTime = {
  startTime?: number
  endTime?: number
}

export type EnableWeeks = {
  [days in Days]?: EnableTime[]
}
export interface IVolunteer {
  name: string
  phoneNumber: string
  organization?: string
  enableWeek?: EnableWeeks
}

export interface IVolunteerDoc extends IVolunteer, mongoose.Document {
  // method 정의
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IVolunteerModel extends mongoose.Model<IVolunteerDoc> {}
