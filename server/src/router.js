const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

// CRUD middleware routing
const createTodoRoute = require('./routes/createTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodoRoute = require('./routes/deleteTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

const router = express.Router();

router.post('/login', require('./routes/loginRoute')); // login

// CRUD
router.post('/todos', isLoggedIn, createTodoRoute); // create todos
router.get('/todos', isLoggedIn, readTodosRoute); // read todos
router.put('/todos/:id', isLoggedIn, updateTodoRoute); // update todos
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute); // delete todos

// create module
module.exports = router;
