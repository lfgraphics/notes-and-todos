// src/services/todosService.js
import Todo from '../models/todo.js';

export const getAllTodos = async () => {
    return await Todo.find({});
};

export const createTodo = async (todoData) => {
    const todo = new Todo(todoData);
    return await todo.save();
};
