import express, { Request, Response, NextFunction } from 'express'
import { HttpError, NotFoundError } from './errors'
import { testFunc } from './test'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/health', (_: Request, res: Response) => {
  testFunc()
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

app.use((e: Error, _: Request, res: Response, _next: NextFunction) => {
  if (e instanceof HttpError) {
    res.status(e.code)
    res.json({ name: e.name, message: e.message })

    return
  }

  res.status(500)
  res.json({ message: e.message })
})

app.listen(PORT, () => {
  console.log(`Node 서버 연결되었습니다, ${PORT}`)
})
