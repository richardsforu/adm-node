const express = require('express');
const app = express();


//in-memory
//------------------------------------
const todos = [
    { id: 1, title: 'sleep', completed: false },
    { id: 2, title: 'eat', completed: false },
    { id: 3, title: 'play', completed: true },
    { id: 4, title: 'work', completed: false },
    { id: 5, title: 'run', completed: true }
]

//------------------------------------- 

//find all todos
app.get('/api/todos', (req, res) => {
    //res.send(todos);
    res.json(todos);
})


// find todo by id
app.get('/api/todos/:id', (req, res) => {
    let id = Number.parseInt(req.params.id);

    let todo = todos.find(todo => todo.id === id);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ status: 'Not Found' })
    }

})


// list todos whose completed status is trur or false
app.get('/api/todos/status/:status', (req, res) => {
    let status = req.params.status;

    let filteredTodos = todos.filter(todo => String(todo.completed) == status);

    res.json(filteredTodos);

})


// post a new todo to existog todos
app.post('/api/todos', express.json(), (req, res) => {

    /*
        todos.map((todo) => {
            if (todo.id === req.body.id) {
                res.status(400).json({ msg: "Invalid ID: ID " + req.body.id + " already exists" })
            }
        })
    
    */

    let new_todo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed
    };

    todos.push(new_todo);
    console.log(new_todo);
    res.status(201).json(new_todo)
})



// Update Existing todo

app.put('/api/todos/:id', express.json(), (req, res) => {

    let id = Number(req.params.id);
    let body = req.body;
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.title = body.title
    } else {
        res.status(404).json({ msg: 'Not Found' })
    }

    res.json(todo);
})

// delete existing todo with givinn id

app.delete('/api/todos/:id', (req, res) => {
    let id = Number(req.params.id);

    const idx = todos.findIndex(todo => todo.id === id);

    if (idx !== -1) {
        todos.splice(idx, 1);
        res.json({ status: 'Deleted' })
    } else {
        res.status(404).json({ status: 'Not Found' });
    }

})


app.listen(3000, () => {
    console.log(' server started on port 3000');
})



/*

HTTP Methods
GET: Listing data
POST : Posting data
PUT : Updating entire object
PATCH : Partial update
DELETE: DELETE data

*/