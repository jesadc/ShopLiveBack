import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import orderRoutes from './routes/orders';

const app = express();

const corsOptions = {
  origin: 'https://shoplivemx.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Configurar CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Habilitar preflight requests para todas las rutas

app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://jesadc571:Fv7ihXrMHrriFizh@clustershoplive.ur6suv6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
