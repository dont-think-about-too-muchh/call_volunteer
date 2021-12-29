import { IVolunteerModel, IVolunteer } from '..'

export async function updateVolunteerService(
  id: string,
  { name, phoneNumber, organization, enableWeek }: Partial<IVolunteer>,
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
) {
  await volunteerModel.updateOne(
    { id },
    { $set: { name, phoneNumber, organization, enableWeek } }
  )
}
