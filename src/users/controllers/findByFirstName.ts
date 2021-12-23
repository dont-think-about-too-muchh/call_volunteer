import { Request, Response } from 'express'
import { NotFoundError } from '../../errors'
import { findByFirstNameService, IUserDoc, User as userModel } from '..'

type ReqBody = {
  firstName: string
}

type ResBody = {
  users: IUserDoc[]
}

export async function findByFirstNameController(
  { body: { firstName } }: Request<unknown, unknown, ReqBody>,
  res: Response<ResBody>
) {
  const users = await findByFirstNameService(firstName, {
    userModel,
  })
  if (!users) {
    throw new NotFoundError()
  }
  res.json({ users })
}
