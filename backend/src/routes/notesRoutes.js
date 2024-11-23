// src/routes/notesRoutes.js
import express from 'express';
import * as notesController from '../controllers/notesController.js';

const router = express.Router();

router.get('/', notesController.getNotes);
router.post('/', notesController.createNote);
router.put('/:id', (req, res, next) => {
    console.log('PUT request received for note with ID:', req.params.id);
    next(); // Pass it on to the controller
}, notesController.updateNote);

export default router;
