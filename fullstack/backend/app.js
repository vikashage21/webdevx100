import express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'
import { productRouter } from './router/productRouter.js'
import { connectDb } from './db/conn.js'
import { userRouter } from './router/userRouter.js'
import { loginRouter } from './router/loginRouter.js'
import { orderRouter } from './router/orderRouter.js'

configDotenv()
const app = express()
const port = process.env.PORT || 8000
// configuring the cors

app.use(cors())

//  testing the cors is working or not 



// middlewares

app.use(express.json())

app.use('/products', productRouter)

app.use('/api', userRouter)
app.use('/api', loginRouter)
app.use('/api', orderRouter)




connectDb(
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`server is running on port ${port}`)
    })
)
