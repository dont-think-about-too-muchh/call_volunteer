import { IUserDoc, User } from '..'

export function findByFirstNameService(firstName: string): Promise<IUserDoc[]> {
  return User.findByFirstName({ firstName })
}
