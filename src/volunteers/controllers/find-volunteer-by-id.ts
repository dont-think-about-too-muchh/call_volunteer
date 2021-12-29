import { Request, Response } from 'express'
import { BadRequestError, NotFoundError } from '../../errors'
import { findVolunteerByIdService, IVolunteerDoc, Volunteer } from '..'

type ReqParams = {
  id: string
}

type ResBody = {
  volunteer: IVolunteerDoc
}

export async function findVolunteerByIdController(
  { params: { id } }: Request<ReqParams>,
  res: Response<ResBody>
) {
  if (!id) {
    throw new BadRequestError()
  }
  const volunteer = await findVolunteerByIdService(
    { id },
    { volunteerModel: Volunteer }
  )

  if (!volunteer) {
    throw new NotFoundError()
  }
  res.json({ volunteer })
}
