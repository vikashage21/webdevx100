import { product } from "../model/productSchema.js"


export const getProducts = async (req, res) => {
    try {

        const data = await product.find({})

        res.json({
            products: data
        })


    } catch (error) {
        console.log(error)
    }
}

