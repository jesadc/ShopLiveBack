import { Request, Response } from 'express';
import { OrderModel } from '../models/Order';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderModel.find();
    res.json(orders);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { customerName, productName, quantity } = req.body;

  if (!customerName || !productName || !quantity) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const newOrder = new OrderModel({ customerName, productName, quantity });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: error.message });
  }
};
