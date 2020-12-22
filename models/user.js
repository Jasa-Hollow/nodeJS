// Importando el módulo de mongoose
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Primer nombre es requerido"]
    },
    lastName: {
        type: String,
        required: [true, "Apellido es requerido"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Correo es requerido"]
    },
    password: {
        type: String,
        required: [true, "Contraseña es requerida"]
    }
})

export const User = mongoose.model('User', userSchema);