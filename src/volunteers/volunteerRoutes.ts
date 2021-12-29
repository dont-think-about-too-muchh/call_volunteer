import express, { Request, Response } from 'express'
import { createVolunteerController } from './controllers'
import { Volunteer } from './model'
import { findVolunteersByTimeService } from './services'

const volunteerRoutes = express.Router()

volunteerRoutes.get('', async (_: Request, res: Response) => {
  const test = await findVolunteersByTimeService({ volunteerModel: Volunteer })

  res.json({ test })
})

volunteerRoutes.post('', createVolunteerController)
export { volunteerRoutes }
