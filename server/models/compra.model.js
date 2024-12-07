import mongoose from "mongoose";

const compraSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    productos: [
        {
            productoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            cantidad: {
                type: Number,
                required: true
            },
            precio: {
                type: mongoose.Schema.Types.Decimal128,
                required: true
            }
        }
    ],
    total: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    fechaCompra: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Compra', compraSchema);