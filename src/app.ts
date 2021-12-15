import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.use()

app.listen(PORT, () => {
  console.log(`Node 서버 연결되었습니다, ${PORT}`)
})
