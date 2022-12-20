const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const router = express.Router();

// login
router.post('/login', require('./routes/loginRoute'));

// get todos
router.get('/todos', isLoggedIn, require('./routes/todosRoute'));

// create module
module.exports = router;
