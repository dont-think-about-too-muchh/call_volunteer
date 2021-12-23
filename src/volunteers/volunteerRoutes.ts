import express, { Request, Response } from 'express'
import { DateTime } from 'luxon'
import { createVolunteerController } from './controllers'

const volunteerRoutes = express.Router()

// volunteerRoutes.route('/volunteers')
volunteerRoutes.get('/test', (_: Request, res: Response) => {
  const legacyDate = DateTime.local(2017, 3, 12, 10, { zone: 'Asia/Seoul' })

  const date = DateTime.local().setZone('Asia/Seoul')

  console.log(1, legacyDate.get('weekdayShort'))
  console.log(2, date.get('weekdayShort'))
  console.log(3, legacyDate.get('hour') < date.get('hour'))

  res.json('ok')
})
volunteerRoutes.post('', createVolunteerController)
export { volunteerRoutes }
