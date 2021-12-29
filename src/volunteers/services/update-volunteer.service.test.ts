import { testVolunteer } from '../../factories'
import { Volunteer } from '..'
import { createVolunteerService, updateVolunteerService } from '.'
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

describe('updateVolunteerService Test', () => {
  it('updateVolunteerService 봉사자 정보(이름)를 수정한다.', async () => {
    const volunteerConfig = testVolunteer({ name: 'kim' })
    const volunteer = await createVolunteerService(volunteerConfig, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'updateOne')

    const updatedName = 'Lee'

    await updateVolunteerService(
      volunteer.id,
      { name: updatedName },
      { volunteerModel: Volunteer }
    )

    const found = await Volunteer.findOne({ name: updatedName })

    expect(spy).toBeCalledTimes(1)
    // expect(spy).toBeCalledWith(volunteer)
    expect(found!.name).toEqual(updatedName)
    expect(found!.phoneNumber).toEqual(volunteer.phoneNumber)
  })

  it('updateVolunteerService 봉사자 정보(이름, 전화번호)를 수정한다.', async () => {
    const volunteerConfig = testVolunteer({ name: 'kim' })
    const volunteer = await createVolunteerService(volunteerConfig, {
      volunteerModel: Volunteer,
    })

    const spy = jest.spyOn(Volunteer, 'updateOne')

    const updatedName = 'Lee'
    const updatedPhoneNumber = '01067891234'

    await updateVolunteerService(
      volunteer.id,
      { name: updatedName, phoneNumber: updatedPhoneNumber },
      { volunteerModel: Volunteer }
    )

    const found = await Volunteer.findOne({
      name: updatedName,
      phoneNumber: updatedPhoneNumber,
    })

    expect(spy).toBeCalledTimes(1)
    // expect(spy).toBeCalledWith(volunteer)
    expect(found!.name).toEqual(updatedName)
    expect(found!.phoneNumber).toEqual(updatedPhoneNumber)
    expect(found!.organization).toEqual(volunteer.organization)
  })
})
