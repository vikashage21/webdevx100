import { MongoClient } from "mongodb";


// connection url

const url = "mongodb://localhost:27017";

// database name 

const dbName = "resturant"

const collectionName = 'product'


const client = new MongoClient(url);

export const connectDb = async () => {
    await client.connect();

    console.log('connected to mongodb successfully');
    const db = client.db(dbName);
    const collection = db.collection(collectionName).find({}).toArray()

return collection;  
}