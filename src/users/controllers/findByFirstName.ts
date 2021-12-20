import { Request, Response } from 'express'
import { NotFoundError } from '../../errors'
import { findByFirstNameService, IUserDoc, User as userRepository } from '..'

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
    userRepository,
  })
  if (!users) {
    throw new NotFoundError()
  }
  res.json({ users })
}
