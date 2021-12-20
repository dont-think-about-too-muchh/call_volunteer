import express from 'express'
import { findByFirstNameController } from './controllers'

const userRoutes = express.Router()

userRoutes.route('/users')
userRoutes.get('', findByFirstNameController)
export { userRoutes }
