import mongoose from "mongoose";

<<<<<<< HEAD
const AdminsSchema = new mongoose.Schema({
=======
const adminsSchema = new mongoose.Schema({
>>>>>>> committ
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

<<<<<<< HEAD
export default mongoose.model('Admins',AdminsSchema)
=======
export default mongoose.model('Admins',adminsSchema);
>>>>>>> committ
