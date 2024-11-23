// src/models/note.js
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Note = mongoose.model('Note', noteSchema);
export default Note;
