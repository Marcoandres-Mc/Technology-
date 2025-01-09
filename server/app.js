import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import userProducts from './routes/product.routes.js';
import compraRoutes from './routes/compra.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();



const app = express();


app.use(morgan('dev'));
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Conectado');
})

app.use(cors({
    origin: process.env.MAIN_PAGE.replace(/\/$/, ''), 
    credentials: true
}));


app.use('/api', userRoutes);
app.use('/api', userProducts);
app.use('/api/auth', authRoutes);
app.use('/api', compraRoutes);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

export default app;

//aa