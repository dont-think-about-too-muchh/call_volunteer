import { IUserDoc } from '.'

export async function getFirstName(this: IUserDoc): Promise<string> {
  return this.firstName
}
