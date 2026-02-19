import Razorpay from 'razorpay'
import { configDotenv } from 'dotenv'
configDotenv()

export const razorpay = new Razorpay({
    key_id: process.env.API_KEY,
    key_secret: process.env.API_KEY_SECRET
})