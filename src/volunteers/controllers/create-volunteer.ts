import { Request, Response } from 'express'
import { NotFoundError } from '../../errors'
import { createVolunteerService, IVolunteerDoc, Days, Volunteer } from '..'

type ReqBody = {
  name: string
  phoneNumber: number
  startTime?: Date
  endTime?: Date
  days?: Days[]
}

type ResBody = {
  volunteer: IVolunteerDoc
}

export async function createVolunteerController(
  { body, body: { name, phoneNumber } }: Request<unknown, unknown, ReqBody>,
  res: Response<ResBody>
) {
  if (!name || !phoneNumber) {
    throw new NotFoundError()
  }
  const volunteer = await createVolunteerService(body, {
    volunteerModel: Volunteer,
  })

  res.json({ volunteer })
}
