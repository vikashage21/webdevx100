import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String

    }
    ,
    stock: {
        type: Number,
        default: 0
    }
},
    {
        timeStamps: true
    })


export const product = mongoose.model('product', productSchema)

