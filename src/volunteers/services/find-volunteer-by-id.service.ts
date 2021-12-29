import { IVolunteerModel, IVolunteerDoc } from '..'

export function findVolunteerByIdService(
  { id }: { id: string },
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
): Promise<IVolunteerDoc | null> {
  return volunteerModel.findById(id).exec()
}
