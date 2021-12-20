import { IUser, User } from './users'

export async function testCreateUser() {
  const user: IUser = {
    firstName: 'kim',
    lastName: 'dohun',
    email: 'asdf2@gmail.com',
    password: 'rootroot',
  }
  await User.create(user)
  console.log('이것은 테스트 함수입니다1.')
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
