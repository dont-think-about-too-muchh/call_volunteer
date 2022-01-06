import { testUser } from '../../factories'
import { findByFirstNameService, User } from '..'
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

describe('findBydFirstName Test', () => {
  it('test 1', async () => {
    const userConfig = testUser({ firstName: 'kim' })

    const user = await User.create(userConfig)
    await user.save()
    const spy = jest.spyOn(User, 'find')

    const [{ firstName }, _] = await findByFirstNameService(
      userConfig.firstName,
      {
        userModel: User,
      }
    )

    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith({ firstName: userConfig.firstName })
    expect(firstName).toEqual(userConfig.firstName)
  })
})
