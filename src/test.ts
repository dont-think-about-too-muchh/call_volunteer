import { IUser, User } from './users/user.model'

export async function testFunc() {
  const user: IUser = {
    firstName: 'kim',
    lastName: 'dohun',
    email: 'asdf2@gmail.com',
    password: 'rootroot',
  }
  await User.create(user)
  console.log('이것은 테스트 함수입니다1.')
}

export async function testFunc2() {
  const firstName = 'kim'
  const user = await User.findByFirstName({ firstName })
  console.log('이것은 테스트 함수입니다2.', user)
  return user
}
