import mongoose from 'mongoose'
import { testVolunteer } from '../../factories'
import { Volunteer } from '..'
import { createVolunteerService, findVolunteerByIdService } from '.'
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

describe('findVolunteerByIdService Test', () => {
  it('findVolunteerByIdService 해당 id를 갖는 volunteer를 반환한다.', async () => {
    const volunteerConfig = testVolunteer({ name: 'kim' })

    const volunteer = await createVolunteerService(volunteerConfig, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'findById')

    const found = await findVolunteerByIdService(
      { id: volunteer.id },
      { volunteerModel: Volunteer }
    )

    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith(volunteer.id)
    expect(found!.name).toEqual(volunteer.name)
  })

  it('findVolunteerByIdService 해당 id를 갖지 못 하는 경우 null 반환.', async () => {
    const volunteerConfig = testVolunteer({ name: 'kim' })
    const wrongObjectID = new mongoose.Types.ObjectId()
    const stringWrongID = wrongObjectID.toString()

    await createVolunteerService(volunteerConfig, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'findById')

    const found = await findVolunteerByIdService(
      { id: stringWrongID },
      { volunteerModel: Volunteer }
    )

    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith(stringWrongID)
    expect(found).toEqual(null)
  })
})
