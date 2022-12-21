const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  console.log('asdasda');
  const { text, completed } = req.body;
  const todo = new TodoModel({
    text,
    completed,
  });
  const newTodo = await todo.save();
  res.json(newTodo);
};
