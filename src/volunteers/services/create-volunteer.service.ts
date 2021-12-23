import { DateTime } from 'luxon'
import { IVolunteer, IVolunteerModel, Days } from '..'

export async function createVolunteerService(
  {
    name,
    phoneNumber,
    startTime,
    endTime,
    days,
  }: {
    name: string
    phoneNumber: number
    startTime?: Date
    endTime?: Date
    days?: Days[]
  },
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
) {
  const volunteerConfig: IVolunteer = {
    name,
    phoneNumber,
    startTime: startTime
      ? DateTime.fromJSDate(startTime).get('hour')
      : undefined,
    endTime: endTime ? DateTime.fromJSDate(endTime).get('hour') : undefined,
    days,
  }
  const volunteer = await volunteerModel.create(volunteerConfig)

  return volunteer
}
