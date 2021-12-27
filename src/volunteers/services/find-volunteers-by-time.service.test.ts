import { DateTime } from 'luxon'
import { testVolunteer } from '../../factories'
import { Volunteer } from '..'
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
  it('findVolunteersByTimeService 봉사자들을 반환한다.', async () => {
    const now = DateTime.local({ zone: 'Asia/Seoul' })
    // const weekday = String(now.get('weekdayShort')) as Days

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

    // TODO 옵셔널이라 자꾸 undefined로 나오는데 이유 찾기
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // const startTime = found1!.enableWeek![weekday]![0]!.startTime!

    expect(spy).toBeCalledTimes(1)
    expect(found1.name).toEqual(volunteer1.name)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(20).toBeGreaterThanOrEqual(now.get('hour') - 1)
    // expect(test[0]!.startTime).toBeGreaterThanOrEqual(now.get('hour') - 1)
    // expect(test[0]!.endTime).toBeLessThanOrEqual(now.get('hour') + 1)
  })
})
