import { PORT, NODE_ENV } from './config'
import { createApp } from './app'
import { connectMongo } from './db'

const main = async () => {
  await connectMongo()

  createApp().listen(PORT, () => {
    console.log(`서버가 열렸습니다. ${PORT}`, NODE_ENV)
  })
}

main()
