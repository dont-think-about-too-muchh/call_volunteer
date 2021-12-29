import { Request, Response } from 'express'
import { BadRequestError, UnauthorizedError } from '../../errors'
import { updateVolunteerService, IVolunteer, Volunteer } from '..'

type ReqParams = {
  id: string
}

type ReqBody = Partial<IVolunteer>

export async function updateVolunteerController(
  {
    params: { id },
    body,
    body: { name, phoneNumber, organization, enableWeek },
  }: Request<ReqParams, unknown, ReqBody>,
  res: Response
) {
  if (!id) {
    throw new UnauthorizedError()
  }
  if (!(name && phoneNumber && organization && enableWeek)) {
    throw new BadRequestError()
  }
  await updateVolunteerService(id, body, {
    volunteerModel: Volunteer,
  })
  res.status(200).json('ok')
}
