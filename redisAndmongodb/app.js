import express from 'express';
import { configDotenv } from 'dotenv';
import { connectDb } from './db.js';
import { createClient } from 'redis';
configDotenv();
const app = express();

const port = process.env.PORT || 3000;



// connect to redis

const redisClient = createClient({
     url: 'redis://localhost:6379'
})
redisClient.on('error', (err) => console.log(err))
redisClient.connect().then(() => {
    console.log('connected to redis successfully')
})

app.get('/', async (req, res) => {
    try {
        const cacheKey = 'products';

        // 1️⃣ Check Redis
        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            console.log('From Redis');
            return res.json(JSON.parse(cachedData));
        }

        // 2️⃣ Fetch from MongoDB
        const products = await connectDb(); // should return products

        // 3️⃣ Store in Redis
        await redisClient.setEx(
            cacheKey,
            60,
            JSON.stringify(products)
        );

        console.log('From MongoDB');

        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});






app.listen(port, (error) => {
    if (error) throw error;
    console.log(`server is listing on port ${port}`)
})