// src/controllers/notesController.js
import * as todosService from '../services/todosService.js';

export const getTodos = async (req, res, next) => {
    try {
        const notes = await todosService.getAllNotes();
        res.json(notes);
    } catch (error) {
        next(error);
    }
};

export const createTodo = async (req, res, next) => {
    try {
        const newNote = await todosService.createNote(req.body);
        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};
