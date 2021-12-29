import { DateTime } from 'luxon'
import { testVolunteer } from '../../factories'
import { Volunteer, Days } from '..'
import { createVolunteerService, findVolunteersByTimeService } from '.'
import { connectTestMongo, closeTestMongo, clearTestMongo } from '../../tests'

beforeAll(async () => {
  await connectTestMongo()
})
afterEach(async () => {
  await clearTestMongo()
  jest.clearAllMocks()
})
afterAll(async () => {
  await closeTestMongo()
})

describe('findVolunteersByTimeService Test', () => {
  it('findVolunteersByTimeService 오늘 날짜의 가능한 시간 대의 봉사자들을 반환한다.', async () => {
    const now = DateTime.local({ zone: 'Asia/Seoul' })
    const weekday = String(now.get('weekdayShort')) as Days

    const volunteer1 = testVolunteer({
      name: 'vo_1',
    })
    const volunteer2 = testVolunteer({ name: 'vo_2' })
    await createVolunteerService(volunteer1, {
      volunteerModel: Volunteer,
    })
    await createVolunteerService(volunteer2, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'find')

    const [found1, _] = await findVolunteersByTimeService({
      volunteerModel: Volunteer,
    })

    const bsonData = JSON.stringify(found1.enableWeek)
    const parsedData = JSON.parse(bsonData)

    const currentTime = now.get('hour') + 0.5
    const endableWeeks = parsedData[weekday]

    expect(spy).toBeCalledTimes(1)
    expect(found1.name).toEqual(volunteer1.name)
    expect(endableWeeks[0].startTime).toBeLessThanOrEqual(currentTime)
    expect(endableWeeks[0].endTime).toBeGreaterThanOrEqual(currentTime)
  })

  it('findVolunteersByTimeService 지정된 시간이 아니면 반환 불가.', async () => {
    const now = DateTime.local({ zone: 'Asia/Seoul' })
    const currentTime = now.get('hour')

    const volunteer1 = testVolunteer({
      name: 'vo_1',
      enableWeek: {
        Mon: [{ startTime: currentTime + 2, endTime: currentTime + 4 }],
      },
    })
    const volunteer2 = testVolunteer({
      name: 'vo_2',
      enableWeek: {
        Mon: [{ startTime: currentTime + 5, endTime: currentTime + 6 }],
      },
    })
    await createVolunteerService(volunteer1, {
      volunteerModel: Volunteer,
    })
    await createVolunteerService(volunteer2, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'find')

    const found1 = await findVolunteersByTimeService({
      volunteerModel: Volunteer,
    })

    expect(spy).toBeCalledTimes(1)
    expect(found1).toStrictEqual([])
  })
})
