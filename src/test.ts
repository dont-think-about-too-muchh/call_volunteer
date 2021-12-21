import { findByFirstNameService, IUser, User } from './users'

export async function testCreateUser() {
  const user: IUser = {
    firstName: 'kim',
    lastName: 'dohun',
    email: 'asdf2@gmail.com',
    password: 'rootroot',
  }
  const found = await User.create(user)
  const users = await findByFirstNameService(user.firstName, {
    userModel: User,
  })
  console.log('이것은 테스트 함수입니다1.', found)
  console.log('테스트 2', users)
}

export async function testFindByFirstName() {
  const firstName = 'kim'
  const users = await User.findByFirstName({ firstName })
  console.log('이것은 테스트 함수입니다2.', users)
  for (const user of users) {
    console.log(await user.getFirstName())
  }
  return users
}
export async function testFindByFirstName2() {
  const firstName = 'kim'
  const users = await findByFirstNameService(firstName, {
    userModel: User,
  })
  console.log('이것은 테스트 함수입니다2.', users)
  for (const user of users) {
    console.log(await user.getFirstName())
  }
  return users
}
