import mongoose from 'mongoose'
import { IVolunteerModel, IVolunteer } from '..'

export function updateVolunteerService(
  id: string,
  { name, phoneNumber, organization, enableWeek }: Partial<IVolunteer>,
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
): Promise<mongoose.UpdateWriteOpResult> {
  return volunteerModel
    .updateOne(
      { id },
      { $set: { name, phoneNumber, organization, enableWeek } }
    )
    .exec()
}
