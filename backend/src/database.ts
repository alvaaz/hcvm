import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export async function connect(): Promise<void> {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@hcvm-q6gjl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true
      }
    )
    console.log('>>> DB is connected')
  } catch (err) {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
  }
}
