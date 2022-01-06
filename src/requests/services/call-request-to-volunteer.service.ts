import { IRequestModel } from '..'

export function callRequestToVolunteerService(
  userId: string,
  {
    requestModel,
  }: {
    requestModel: IRequestModel
  }
) {
  return requestModel.create({ userId })
}
