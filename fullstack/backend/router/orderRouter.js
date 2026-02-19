import express from 'express'
import { createOrderController } from '../controller/createOrderController.js'

export const orderRouter = express.Router()

orderRouter.post('/create-order', createOrderController)