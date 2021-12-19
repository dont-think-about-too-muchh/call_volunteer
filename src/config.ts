export const PORT = process.env.PORT || 3000
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/UserDB'

export const MONGO_CONFIG = {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
