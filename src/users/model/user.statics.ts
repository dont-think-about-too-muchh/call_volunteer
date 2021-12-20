import { NotFoundError } from '../../errors'
import { IUserDoc, IUserModel } from '.'

export async function findByFirstName(
  this: IUserModel,
  { firstName }: { firstName: string }
): Promise<IUserDoc[]> {
  const users = await this.find({ firstName })

  if (!users) {
    throw new NotFoundError()
  }
  return users
}
