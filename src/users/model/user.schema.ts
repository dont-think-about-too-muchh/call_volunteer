// Create the schema
import mongoose from 'mongoose'
import { IUserModel, findByFirstName, getFirstName, IUser } from '..'

const UserSchema = new mongoose.Schema<IUser, IUserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: String,
    birthday: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
)

// UserSchema.statics.findByFirstName = findByFirstName
UserSchema.static('findByFirstName', findByFirstName)
UserSchema.method('getFirstName', getFirstName)
// Create and export user model
export const User = mongoose.model<IUser, IUserModel>('User', UserSchema)
