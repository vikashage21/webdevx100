import { razorpay } from "../utils/razorpay.js";

export const createOrderController = async (req, res) => {
    try {

        const { amount } = req.body

        console.log(amount)
        // creating a order

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: 'receipt_order_1'
        }
        const order = await razorpay.orders.create(options)

        res.status(200).json({
            success: true,
            order
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}