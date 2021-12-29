import { DateTime } from 'luxon'
import { Days, EnableWeeks, IVolunteer } from './volunteers'
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

export function testVolunteer({
  name,
  phoneNumber,
  organization,
  enableWeek,
}: {
  name?: string
  phoneNumber?: string
  organization?: string
  enableWeek?: EnableWeeks
} = {}): IVolunteer {
  const now = DateTime.local({ zone: 'Asia/Seoul' })
  const currentTime = now.get('hour')
  const weekday = String(now.get('weekdayShort')) as Days

  return {
    name: name || 'testKim',
    phoneNumber: phoneNumber || '01012345678',
    organization: organization || 'Korea_Army',
    enableWeek: enableWeek || {
      [weekday]: [{ startTime: currentTime - 1, endTime: currentTime + 1 }],
    },
  }
}
