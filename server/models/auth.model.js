import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    userName: {
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

export default mongoose.model('Admins',adminsSchema);