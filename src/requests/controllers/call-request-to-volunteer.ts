import { Request, Response } from 'express'
import {
  callRequestToVolunteerService,
  IRequestDoc,
  Request as RequestModel,
} from '..'

type ResBody = {
  request: IRequestDoc
}

export async function callRequestToVolunteerController(
  _: Request,
  res: Response<ResBody>
) {
  // TODO passport 세션을 이용한 로그인 구현시
  // const {id} = req.user
  //
  const userId = 'test2'
  const result = await callRequestToVolunteerService(userId, {
    requestModel: RequestModel,
  })
  res.json({ request: result })
}
