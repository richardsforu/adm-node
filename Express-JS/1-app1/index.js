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

app.get('/', (req, res) => {
    res.json(todos);
})

// post a new todo to existog todos
app.post('/', express.json(), (req, res) => {


    todos.map((todo)=>{
        if(todo.id === req.body.id){
            res.status(400).json({msg:"Invalid ID: ID "+req.body.id+" already exists"})
        }
    })
       
    let new_todo = {
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    };

    todos.push(new_todo);

    console.log(new_todo);
    res.send( new_todo)

})

app.put('/', (req, res) => {
    // logic top savw in DB
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