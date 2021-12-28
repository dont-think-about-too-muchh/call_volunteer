import { DateTime } from 'luxon'
import { IVolunteerModel } from '..'

export async function findVolunteersByTimeService({
  volunteerModel,
}: {
  volunteerModel: IVolunteerModel
}) {
  const now = DateTime.local({ zone: 'Asia/Seoul' })
  const weekday = String(now.get('weekdayShort'))
  const currentHour = now.get('hour') + 0.5

  const startTimeProperty = `enableWeek.${weekday}.startTime`
  const endTimeProperty = `enableWeek.${weekday}.endTime`

  const volunteers = await volunteerModel
    .find({
      $or: [
        {
          $and: [
            { [startTimeProperty]: { $lte: currentHour } },
            { [endTimeProperty]: { $gte: currentHour } },
          ],
        },
        {
          $and: [
            { [startTimeProperty]: undefined },
            { [endTimeProperty]: { $gte: currentHour } },
          ],
        },
        {
          $and: [
            { [startTimeProperty]: { $lte: currentHour } },
            { [endTimeProperty]: undefined },
          ],
        },
      ],
    })
    .exec()

  return volunteers
}
