import mongoose from 'mongoose'

// Create the interface
export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  photo?: string
  birthday?: Date
}

export interface IUserDoc extends IUser, mongoose.Document {
  // method 정의

  getFirstName: (this: IUserDoc) => Promise<string>
}

export interface IUserModel extends mongoose.Model<IUserDoc> {
  // static 정의
  findByFirstName: (
    this: IUserModel,
    { firstName }: { firstName: string }
  ) => Promise<IUserDoc[]>
}
