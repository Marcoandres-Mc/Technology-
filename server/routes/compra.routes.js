import { Router } from 'express';
import {
    createCompra,
    getCompras,
    getCompraById,
    updateCompra,
    deleteCompra
} from '../controllers/compra.controllers.js';

const router = Router();

// Crear una nueva compra
router.post('/compras', createCompra);

// Obtener todas las compras
router.get('/compras', getCompras);

// Obtener una compra por ID
router.get('/compras/:id', getCompraById);

// Actualizar una compra por ID
router.put('/compras/:id', updateCompra);

// Eliminar una compra por ID
router.delete('/compras/:id', deleteCompra);

export default router;