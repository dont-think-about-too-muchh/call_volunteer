import { IRequestDoc, IRequestModel } from '..'

export async function findRequestService({
  requestModel,
}: {
  requestModel: IRequestModel
}): Promise<IRequestDoc | null> {
  return requestModel.findOne({ status: 'Pending' })
}
