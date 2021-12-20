import { IUserDoc, IUserModel } from '..'

export function findByFirstNameService(
  firstName: string,
  { userRepository }: { userRepository: IUserModel }
): Promise<IUserDoc[]> {
  return userRepository.findByFirstName({ firstName })
}
