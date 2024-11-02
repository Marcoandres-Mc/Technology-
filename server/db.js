import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectBd = async () => {
    const userAdmin = process.env.MONGO_USER;
    const password = process.env.MONGO_PASSWORD;
    const dbName = process.env.MONGO_DB_NAME;
    const cluster = process.env.MONGO_CLUSTER;
    //MONGO_USER=marcoandres23
    //MONGO_PASSWORD=m7zXcQyyZ6i2y9BU
    //MONGO_PATH=@cluster0.g7reo.mongodb.net
    //MONGO_DB_NAME=TiendaDb
    //SECRET_KEY=tu_clave_secreta
    //PORT=3500

    
    const connectionString = `mongodb+srv://${userAdmin}:${password}${cluster}/?retryWrites=true&w=majority&appName=${dbName}`;
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