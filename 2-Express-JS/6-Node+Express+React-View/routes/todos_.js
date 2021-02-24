var express = require('express');
var router = express.Router();

let todos = [
  { id: 1, title: 'go home', completed: true },
  { id: 2, title: 'go dubai', completed: false },
  { id: 3, title: 'Teach REST Api in next week', completed: false },
]

router
  .get('/', function (req, res, next) {
    // get existing todos from database or any other source
    res.render('todos-view', { todos, todoToEdit: {}, isEditing: false }) // react view
  })
  .get('/delete', (req, res) => {
    let id = Number.parseInt(req.query.id);
    let idx = todos.findIndex(todo => todo.id === id)
    todos.splice(idx, 1)
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })
  .get('/edit', (req, res) => {
    let id = Number.parseInt(req.query.id);
    let todoToEdit = todos.find(todo => todo.id === id)
    res.render('todos-view', { todos, todoToEdit, isEditing: true }) // react view
  })
  .post("/", function (req, res) {
    const body = req.body;
    const isEditing = body.isEditing === "true" ? true : false;
    if (body.title && !isEditing) {
      let newTodo = {
        id: todos.length + 1,
        title: body.title,
        completed: false
      }
      todos.push(newTodo);
    }
    if (body.title && isEditing) {
      let id = Number.parseInt(body.id)
      let existingTodo = todos.find(todo => todo.id === id)
      existingTodo.title = body.title
    }
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })


module.exports = router;
