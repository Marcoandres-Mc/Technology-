import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
))
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);



export default app;