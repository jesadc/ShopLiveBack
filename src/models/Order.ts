import { Schema, model } from 'mongoose';

interface IOrder {
  customerName: string;
  productName: string;
  quantity: number;
}

const orderSchema = new Schema<IOrder>({
  customerName: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const OrderModel = model<IOrder>('Order', orderSchema);

export { OrderModel, IOrder };
