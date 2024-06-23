import { Request, Response } from 'express';
import Order from '../models/Order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    // Hacer cast de error a Error
    const typedError = error as Error;
    res.status(500).json({ message: typedError.message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { customerName, productName, quantity } = req.body;
  const newOrder = new Order({ customerName, productName, quantity });

  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    // Hacer cast de error a Error
    const typedError = error as Error;
    res.status(400).json({ message: typedError.message });
  }
};
