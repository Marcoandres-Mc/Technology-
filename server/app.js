import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import userProducts from './routes/product.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors(
    {
        origin: 'https://fronted-production-43ca.up.railway.app',
        credentials: true
    }
))
app.use('/api', userRoutes);
app.use('', userProducts);
app.use('/api/auth', authRoutes);




export default app;