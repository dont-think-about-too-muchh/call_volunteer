import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3000

const app = express()

// app.use()
app.get('/health', (_: Request, res: Response) => {
  res.json('ok')
})

app.listen(PORT, () => {
  console.log(`Node 서버 연결되었습니다, ${PORT}`)
})
