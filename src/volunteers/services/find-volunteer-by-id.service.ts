import { IVolunteerModel, IVolunteerDoc } from '..'

export async function findVolunteerByIdService(
  { id }: { id: string },
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
): Promise<IVolunteerDoc | null> {
  const volunteer = await volunteerModel.findById(id)

  return volunteer
}
