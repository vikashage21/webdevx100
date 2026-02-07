const { configDotenv } = require('dotenv');
configDotenv();

const express = require('express')
const connectDB = require('../db/conn.js')
const port = 4000;
const router = require('../router/router.js')

const app = express()

// creating a router 

app.use('/api' , router)


connectDB(
    app.listen(process.env.PORT, () => {
        console.log(`server is listing on port ${process.env.PORT}`)
    })
)