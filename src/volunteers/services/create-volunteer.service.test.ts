import { testVolunteer } from '../../factories'
import { Volunteer } from '..'
import { createVolunteerService } from '.'
import {
  connectTestMongo,
  closeTestMongo,
  clearTestMongo,
} from '../../in-memory-mongo'

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

describe('createVolunteerService Test', () => {
  it('createVolunteerService는 봉사자를 생성한 후 반환한다.', async () => {
    const volunteer = testVolunteer({ name: 'kim' })

    const spy = jest.spyOn(Volunteer, 'create')

    const found = await createVolunteerService(volunteer, {
      volunteerModel: Volunteer,
    })

    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith(volunteer)
    expect(found.name).toEqual(volunteer.name)
  })
})
