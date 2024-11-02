import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectBd = async () => {
 
    const connectionString = "mongodb+srv://marcoandres23:m7zXcQyyZ6i2y9BU@cluster0.g7reo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try {

        await mongoose.connect(connectionString, {
            serverSelectionTimeoutMS: 30000, 
            socketTimeoutMS: 45000 
        });
        console.log('>>> DB is connected');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};