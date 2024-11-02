import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import userProducts from './routes/product.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Conectado');
});

app.use(cors({
    origin: 'https://fronted-production-43ca.up.railway.app',
    credentials: true
}));

app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', userProducts);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

export default app;
