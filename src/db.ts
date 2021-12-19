import mongoose from 'mongoose'
import { User } from './users/user.model'
import { MONGO_URI } from './config'

let database: mongoose.Connection | undefined

export async function mongoConnection() {
  if (database) {
    return
  }
  await mongoose.connect(MONGO_URI, { dbName: 'test' })

  database = mongoose.connection

  database.once('open', async () => {
    console.log('Connected to database successfully')
  })

  // In case of any error
  database.on('error', () => {
    console.log(`Error connecting to database. Check Whether mongoDB
    installed or you can try to give opensource Mongo Atlas database`)
  })

  // eslint-disable-next-line consistent-return
  return { User }
}

export const mongoDisconnect = () => {
  if (!database) {
    return
  }

  mongoose.disconnect()
}
