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

    }
    },{
        timestamps: true,
        versionKey: false
    }
)

<<<<<<< HEAD
export default mongoose.model('User', userSchema);
=======
export default mongoose.model('Users', userSchema);
>>>>>>> committ
