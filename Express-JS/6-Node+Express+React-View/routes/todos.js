var express = require('express');
var router = express.Router();

let todos = [
  { id: 1, title: 'go home', completed: true },
  { id: 2, title: 'go dubai', completed: false },
  { id: 3, title: 'Teach REST Api in next week', completed: false },
]

router
  .get('/', function (req, res, next) {
    res.render('todos-view', { todos, todoToEdit: {}, isEditing: false }) // react view
  })
  .delete('/:id', (req, res) => {
    console.log("deleting todo....")
    let id = Number.parseInt(req.params.id);
    let idx = todos.findIndex(todo => todo.id === id)
    todos.splice(idx, 1)
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })
  .get('/:id', (req, res) => {
    let id = Number.parseInt(req.params.id);
    let todoToEdit = todos.find(todo => todo.id === id)
    res.render('todos-view', { todos, todoToEdit, isEditing: true }) // react view
  })
  .post("/", function (req, res) {
    const body = req.body;
    if (body.title) {
      let newTodo = {
        id: todos.length + 1,
        title: body.title,
        completed: false
      }
      todos.push(newTodo);
    }
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })
  .put("/", function (req, res) {
    const body = req.body;
    const action = body.action;
    if (action && action === "complete-all") {
      let areAllCompleted = todos.every(todo => todo.completed)
      todos.forEach(todo => todo.completed = !areAllCompleted)
    }
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })
  .put("/:id", function (req, res) {
    const body = req.body;
    const action = body.action;
    let id = Number.parseInt(body.id)
    let existingTodo = todos.find(todo => todo.id === id)
    if (action && action === "complete") {
      existingTodo.completed = !existingTodo.completed
    }
    else {
      existingTodo.title = body.title
    }
    res.redirect("/todos"); // TO VIEW ALL TODOS
  })



module.exports = router;
