import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

export async function connectTestMongo() {
  const uri = await mongod.getUri()

  await mongoose.connect(uri, { dbName: 'test', minPoolSize: 10 })
}
export async function closeTestMongo() {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongod.stop()
}
export async function clearTestMongo() {
  const collections = await mongoose.connection.collections
  // eslint-disable-next-line guard-for-in
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}
