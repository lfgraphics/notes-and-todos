// src/services/notesService.js
import Note from '../models/note.js';

export const getAllNotes = async () => {
    return await Note.find({});
};

export const createNote = async (noteData) => {
    const note = new Note(noteData);
    return await note.save();
};

export const updateNote = async (id, noteData) => {
    console.log('Updating note with ID:', id);
    return await Note.findByIdAndUpdate(id, noteData, { new: true });
};