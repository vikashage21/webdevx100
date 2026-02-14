

import express, { json } from 'express';
import { configDotenv } from 'dotenv';
import axios from 'axios';
import { createClient } from 'redis';
configDotenv()
const app = express()
const port = process.env.PORT || 3000 // create redis client once 
const redisClient = createClient()
redisClient.on('error', (err) => console.log('redis Error', err))
await redisClient.connect()
app.set('view engine', 'ejs')

app.get('/weather/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cacheKey = `product:${id}`;

        // 1️⃣ Check Redis
        const checkData = await redisClient.get(cacheKey);

        if (checkData) {
            console.log('From Redis');
            return res.json(JSON.parse(checkData));  // ✅ RETURN here
        }

        // 2️⃣ If not in cache → Fetch from API
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await axios.get(url);

        // 3️⃣ Store in Redis for 60 sec
        await redisClient.setEx(
            cacheKey,
            60,
            JSON.stringify(response.data)
        );

        console.log('From API');

        res.json(response.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});


app.listen(port , (err)=> {
    if(err) throw err

    console.log(`server is listing on port ${port}`)
}
)