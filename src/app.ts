import express, { Request, Response, NextFunction } from 'express'
import { requestRoutes } from './requests'
import { volunteerRoutes } from './volunteers'
import { userRoutes } from './users'
import { HttpError, NotFoundError } from './errors'

export const createApp = () => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))

  app.use(express.json())

  app.get('/health', (_: Request, res: Response) => {
    return res.json('ok')
  })

  app.get('/error', (_, __, next: NextFunction) => {
    try {
      throw new NotFoundError('에러테스트')
    } catch (err) {
      // console.error(err)
      next(err)
    }
  })

  app.use('/api/v1/users', userRoutes)
  app.use('/api/v1/volunteers', volunteerRoutes)
  app.use('/api/v1/requests', requestRoutes)

  app.use((e: Error, _: Request, res: Response, _next: NextFunction) => {
    if (e instanceof HttpError) {
      res.status(e.code)
      res.json({ name: e.name, message: e.message })

      return
    }

    res.status(500)
    res.json({ message: e.message })
  })

  return app
}
