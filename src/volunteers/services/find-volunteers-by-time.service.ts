import { DateTime } from 'luxon'
import { IVolunteerModel } from '..'

export async function findVolunteersByTimeService({
  volunteerModel,
}: {
  volunteerModel: IVolunteerModel
}) {
  const date = DateTime.local({ zone: 'Asia/Seoul' })
  const hour = date.get('hour')

  const volunteers = await volunteerModel.find({
    days: { $in: String(date.get('weekdayShort')) },
    startTime: { $gte: hour },
    endTime: { $lte: hour },
  })

  return volunteers
}
