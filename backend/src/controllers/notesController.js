// src/controllers/notesController.js
import mongoose from 'mongoose';
import * as notesService from '../services/notesService.js';

export const getNotes = async (req, res, next) => {
    console.log('getNotes called');
    try {
        const notes = await notesService.getAllNotes();
        res.json(notes);
    } catch (error) {
        next(error);
    }
};

export const createNote = async (req, res, next) => {
    try {
        const newNote = await notesService.createNote(req.body);
        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};

export const updateNote = async (req, res, next) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: 'Invalid note ID' });
    }
    try {
        const updatedNote = await notesService.updateNote(req.params.id, req.body);
        console.log('notes id:', req.params.id);
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(updatedNote);
    } catch (error) {
        next(error);
    }
};
