import mongoose from 'mongoose'
// import { MutableDAYS } from '.'

export const DAYS_OF_WEEK = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
] as const

export type Days = typeof DAYS_OF_WEEK[number]

// type Mutable<T> = { -readonly [P in keyof T]: T[P] }
// type MutableDAYS = Mutable<typeof DAYS>
// const test: Mutable<typeof DAYS> = [...DAYS]

// Create the interface
export interface IVolunteer {
  name: string
  phoneNumber: number
  startTime?: number
  endTime?: number
  days?: Days[]
}

export interface IVolunteerDoc extends IVolunteer, mongoose.Document {
  // method 정의
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IVolunteerModel extends mongoose.Model<IVolunteerDoc> {}
