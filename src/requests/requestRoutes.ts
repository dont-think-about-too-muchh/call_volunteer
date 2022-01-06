import { Router } from 'express'
import { controllerWrapper } from '../controller-wrapper'
import { callRequestToVolunteerController } from '.'

const requestRoutes = Router()
requestRoutes.get('', controllerWrapper(callRequestToVolunteerController))

export { requestRoutes }
