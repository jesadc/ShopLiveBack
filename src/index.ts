import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import orderRoutes from './routes/orders';

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'https://shoplivemx.netlify.app', // Permitir solicitudes desde tu frontend en Netlify
}));

app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'your-mongodb-connection-string';
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
