import express from 'express'
import { createVolunteerController } from './controllers'

const volunteerRoutes = express.Router()

volunteerRoutes.post('', createVolunteerController)
export { volunteerRoutes }
