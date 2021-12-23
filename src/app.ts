import express, { Request, Response, NextFunction } from 'express'
import { userRoutes } from './users'
import { HttpError, NotFoundError } from './errors'
import {
  testCreateUser,
  testFindByFirstName,
  testFindByFirstName2,
} from './test'

export const createApp = () => {
  const app = express()

  app.get('/health', (_: Request, res: Response) => {
    testCreateUser()
    return res.json('ok')
  })
  app.get('/test', (_: Request, res: Response) => {
    testFindByFirstName()
    return res.json('ok')
  })
  app.get('/test2', (_: Request, res: Response) => {
    testFindByFirstName2()
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

  app.use('/api/v1', userRoutes)

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
