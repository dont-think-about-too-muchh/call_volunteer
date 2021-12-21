import { IUserDoc, IUserModel } from '..'

export async function findByFirstNameService(
  firstName: string,
  { userModel }: { userModel: IUserModel }
): Promise<IUserDoc[]> {
  const users = await userModel.find({ firstName })

  return users
}
