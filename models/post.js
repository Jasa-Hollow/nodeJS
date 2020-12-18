// Importando el módulo de mongoose
import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    body: String
})

export const Post = mongoose.model('Post', postSchema);