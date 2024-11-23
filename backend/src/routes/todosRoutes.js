// src/routes/todosRoutes.js
import express from 'express';
import * as todosController from '../controllers/todosController.js';

const router = express.Router();

router.get('/', todosController.getTodos);
router.post('/', todosController.createTodo);

export default router;
