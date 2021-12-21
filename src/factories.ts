import { IUser } from './users'

export function testUser({
  firstName,
  lastName,
  email,
  password,
  photo,
  birthday,
}: {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  photo?: string
  birthday?: Date
} = {}): IUser {
  return {
    firstName: firstName || 'kim',
    lastName: lastName || 'dohan',
    email: email || 'test@gmail.com',
    password: password || 'rootroot',
    photo: photo || 'ajlkjjsdfa',
    birthday: birthday || new Date(),
  }
}

// firstName: string
//   lastName: string
//   email: string
//   password: string
//   photo?: string
//   birthday?: Date
