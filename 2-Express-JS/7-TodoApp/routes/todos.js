var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  'host': 'localhost',
  'port': 3306,
  'user': 'root',
  'password': 'root1234',
  'database': 'todos_db'
})

connection.connect();

router
  .get('/', function (req, res, next) {
    const sql = 'select * from todos';
    connection.query(sql, (error, todos) => {
      console.log(todos);
      if (error) throw error;
      results = todos.map(item => {
        item.completed = item.completed === 0 ? false : true
        console.log(item);
        return item;
      })
      // console.log(todos);
      res.status(200).json(results);
      //res.render('todos-view', { todos, todoToEdit: {}, isEditing: false }) // react view
    })

  })


  .delete('/:id', (req, res) => {
    console.log("deleting todo....")
    let id = Number.parseInt(req.params.id);
    const sql = `delete from todos where id=${id}`
    connection.query(sql, (error, result) => {
      if (error) throw error
      res.status(200).json({ status: 'Todo with ' + id + ' is deleted' })
    })

  })


  .get('/:id', (req, res) => {
    let id = Number.parseInt(req.params.id);
    const sql = `select * from todos where id=${id}`
    connection.query(sql, (error, result) => {
      if (error) throw error
      let item = result[0];
      item.completed = item.completed === 0 ? false : true
      res.status(200).json(item);
    })

  })


  .post("/", function (req, res) {
    const body = req.body;
    const sql = `insert into todos(title,completed) values('${body.title}',0)`

    if (body.title) {
      connection.query(sql, (err, result) => {
        if (err) throw err
        res.status(201).json({ id: result.insertId, title: body.title, completed: false })
      })

    }
    // res.redirect("/todos"); // TO VIEW ALL TODOS
  })


  .patch('/:id', (req, res) => {

    let id = Number.parseInt(req.params.id)
    const completed = req.body.completed;
    const sql = `update todos set completed=${completed} where id=${id}`
    connection.query(sql, (err, result) => {
      if (err) throw err
      res.status(200).json({ count: 1 })
    })
  })



  .put("/:id", function (req, res) {
    const body = req.body;
    const action = body.action;
    let id = Number.parseInt(req.params.id)

    const sql = `update todos set title='${body.title}' where id=${id}`

    connection.query(sql, (err, result) => {
      if (err) throw err
      res.status(200).json(result)
    })
  })



module.exports = router;
