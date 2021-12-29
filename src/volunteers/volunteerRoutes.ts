import express from 'express'
import {
  createVolunteerController,
  findVolunteerByIdController,
  updateVolunteerController,
} from './controllers'

const volunteerRoutes = express.Router()

volunteerRoutes.get('/:id', findVolunteerByIdController)
volunteerRoutes.patch('/:id', updateVolunteerController)
volunteerRoutes.post('', createVolunteerController)

export { volunteerRoutes }
