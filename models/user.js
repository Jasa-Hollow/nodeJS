// Importando los módulos a utilizar.
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Primer nombre es requerido"],
    },
    lastName: {
        type: String,
        required: [true, "Apellido es requerido"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Correo es requerido"],
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: [true, "Contraseña es requerida"],
    }
});

userSchema.methods.isPasswordValid = async function (plainText) {
    const isValid = await bcrypt.compare(txtPassw, this.password);
    return isValid;
}

userSchema.statics.findByEmail = function (email, txtPassw) {
    return new Promise((resolve, reject) => {
        this.findOne({email:email}
        .then(user => {
            bcrypt.compare(txtPassw, user.password).then(isValid => {
                resolve({isValid:isValid, user: user});
            }).catch(err => {
                reject(err);
            })
        }).catch(err => {
            reject(err);
        }));
    });
}

export const User = mongoose.model('User', userSchema);