import { PORT } from './config'
import { createApp } from './app'
import { mongoConnection } from './db'

const main = async () => {
  await mongoConnection()

  createApp().listen(PORT, () => {
    console.log(`서버가 열렸습니다. ${PORT}`)
  })
}

main()
