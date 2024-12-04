import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,

    },
    listaCarrito: [
        {
            productoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            cantidad: {
                type: Number,
                required: true,
            },
        }
    ],
},  {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Users', userSchema);