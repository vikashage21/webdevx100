import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()

export const connectDb = async () => {

  try{
      await mongoose.connect(process.env.DATABASE_URL)
    console.log('connected to mongodb database successfully ✔️⭐⭐')
  }
  catch(error) {
    console.log(`database connection failed ${error}`)
  }
}