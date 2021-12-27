import { DateTime } from 'luxon'
import { EnableWeeks, IVolunteer } from './volunteers'
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
  const weekday = String(now.get('weekdayShort'))
  return {
    name: name || 'testKim',
    phoneNumber: phoneNumber || '01012345678',
    organization: organization || 'Korea Army',
    enableWeek: enableWeek || {
      [weekday]: [
        { startTime: now.get('hour') - 1, endTime: now.get('hour') + 1 },
      ],
    },
    // enableWeek: enableWeek || { Sun: [{ startTime: 10, endTime: 20 }] },
  }
}
