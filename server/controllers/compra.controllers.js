import Compra from '../models/compra.model.js';

// Crear una nueva compra
export const createCompra = async (req, res) => {
    try {
        const { usuarioId, productos, total } = req.body;

        const nuevaCompra = new Compra({
            usuarioId,
            productos,
            total
        });

        const compraGuardada = await nuevaCompra.save();
        res.status(201).json(compraGuardada);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener todas las compras
export const getCompras = async (req, res) => {
    try {
        const compras = await Compra.find().populate('usuarioId').populate('productos.productoId');
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener una compra por ID
export const getCompraById = async (req, res) => {
    try {
        const { id } = req.params;
        const compra = await Compra.findById(id).populate('usuarioId').populate('productos.productoId');
        if (!compra) return res.status(404).json({ mensaje: 'Compra no encontrada' });
        res.status(200).json(compra);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar una compra por ID
export const updateCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const compraActualizada = await Compra.findByIdAndUpdate(id, req.body, { new: true });
        if (!compraActualizada) return res.status(404).json({ mensaje: 'Compra no encontrada' });
        res.status(200).json(compraActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Eliminar una compra por ID
export const deleteCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const compraEliminada = await Compra.findByIdAndDelete(id);
        if (!compraEliminada) return res.status(404).json({ mensaje: 'Compra no encontrada' });
        res.status(200).json({ mensaje: 'Compra eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};