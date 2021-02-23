var express = require('express');
var router = express.Router();


let todos = [
    { id: 1, title: 'Learn Node.JS', completed: true },
    { id: 2, title: 'Learn React JS', completed: false },
    { id: 3, title: 'Learn database integration tomorrow', completed: false }
]

router
    .get('/', (req, res, next) => {
        // load all todos from database
        res.json(todos); // JSON -> Java sceript object notation data format
    })

    .get('/:id', (req, res) => {
        let id = Number.parseInt(req.params.id);
        let todo = todos.find(todo => todo.id === id)
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ status: 'Not Found' })
        }
    })

    .delete('/:id', (req, res) => {
        let id = Number.parseInt(req.params.id);
        let idx = todos.findIndex(todo => todo.id === id);
        if (idx != -1) {
            todos.splice(idx, 1)
            res.json({ status: 'Todo with id '+id+' is deleted' })
        } else {
            res.status(404).json({ status: 'Not Found' })
        }
    })

    .post('/', (req, res) => {
        const body = req.body;
        if (body.title) {
            let newTodo = {
                id: todos.length + 1,
                title: body.title,
                completed: false
            }
            todos.push(newTodo);
            res.status(200).json(newTodo)
        }
    })

    // update ? single, or update all completed
    .put('/', (req, res) => {
        const body = req.body;
        const action = body.action;

        if (action && action === "complete-all") {

            let areAllCompleted = todos.every(todo => todo.completed)
            // areAllCompleted contains false if any of todo completed status is false
            //areAllCompleted contains true if all todos completed status is true

            todos.forEach(todo => { todo.completed = !areAllCompleted })
            /*
            todo.completed = true
            */
            res.json({ status: 'updated all completed status as true' })
        }
    })

    .put('/:id', (req, res) => {
        const body = req.body;
        const action = body.action;
        let id = Number.parseInt(req.params.id);

        let existingTodo = todos.find(todo => todo.id === id)

        if (action && action === "complete") {
            existingTodo.completed = !existingTodo.completed; // toggle
        } else {
            existingTodo.title = body.title;
        }
        res.json(existingTodo)
    })


module.exports = router