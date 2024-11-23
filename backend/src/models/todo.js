// src/models/todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
