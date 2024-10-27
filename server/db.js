import mongoose from "mongoose";
import dotenv from "dotenv";
import {password} from "./config/config.js";
import {userAdmin} from "./config/config.js";

dotenv.config();
export const connectBd = async () => {
    const connectionString = `mongodb+srv://${userAdmin}:${password}@cluster0.g7reo.mongodb.net/?retryWrites=true&w=majority&appName=TiendaDb`;
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