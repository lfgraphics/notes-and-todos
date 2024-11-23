// src/app.js
import express from 'express';
import connectDB from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import todosRoutes from './routes/todosRoutes.js';

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use((err, req, res, next) => {
    console.error('Global error:', err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Routes
app.use('/api/notes', notesRoutes);
app.use('/api/todos', todosRoutes);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
