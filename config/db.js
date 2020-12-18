import mongoose from 'mongoose';

export const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true});
    console.log(`Mongo db connected: ${conn.connection.host}`);
}