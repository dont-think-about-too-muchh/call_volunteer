import { DateTime } from 'luxon'
import { IVolunteerDoc, IVolunteerModel } from '..'

// TODO api로 노출하지 않고 twilio로 전화 연결 할 때 사용 예정

export async function findVolunteersByTimeService({
  volunteerModel,
}: {
  volunteerModel: IVolunteerModel
}): Promise<IVolunteerDoc[]> {
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
