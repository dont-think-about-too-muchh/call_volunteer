import mongoose from 'mongoose'
import { NotFoundError } from '../errors'

// Create the interface
export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  photo?: string
  birthday?: Date
}

/**
 * @Todo 나중에 method, static 분리하기
 */
export interface IUserDoc extends IUser, mongoose.Document {
  // method 정의
}

export interface IUserModel extends mongoose.Model<IUser> {
  // static 정의
  findByFirstName: (
    this: IUserModel,
    { firstName }: { firstName: string }
  ) => Promise<IUserDoc[]>
}

// Create the schema
const UserSchema = new mongoose.Schema<IUserDoc, IUserModel>(
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
async function findByFirstName(
  this: IUserModel,
  { firstName }: { firstName: string }
): Promise<IUserDoc[]> {
  const users = await this.find({ firstName })

  if (!users) {
    throw new NotFoundError()
  }
  return users
}
UserSchema.static('findByFirstName', findByFirstName)

// Create and export user model
export const User = mongoose.model<IUserDoc, IUserModel>('User', UserSchema)
