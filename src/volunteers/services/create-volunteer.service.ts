import {
  IVolunteer,
  IVolunteerModel,
  IVolunteerDoc,
  EnableWeeks,
  DAYS_OF_WEEK,
  defaultEnableTime,
} from '..'

function createDefaultEnableWeek(): EnableWeeks {
  const enableWeek: EnableWeeks = {}
  DAYS_OF_WEEK.forEach((day) => {
    Object.assign(enableWeek, { ...enableWeek, [day]: defaultEnableTime })
  })
  return enableWeek
}

export function createVolunteerService(
  {
    name,
    phoneNumber,
    organization,
    enableWeek,
  }: {
    name: string
    phoneNumber: string
    organization?: string
    enableWeek?: EnableWeeks
  },
  {
    volunteerModel,
  }: {
    volunteerModel: IVolunteerModel
  }
): Promise<IVolunteerDoc> {
  const volunteerConfig: IVolunteer = {
    name,
    phoneNumber,
    organization,
    enableWeek: enableWeek || createDefaultEnableWeek(),
  }
  return volunteerModel.create(volunteerConfig)
}
