import { IRequestDoc, IRequestModel } from '..'

export async function findRequestsService({
  requestModel,
}: {
  requestModel: IRequestModel
}): Promise<IRequestDoc[]> {
  return requestModel.find({ status: 'Pending' })
}
