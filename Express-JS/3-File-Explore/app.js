const express = require('express');
const fs = require('fs');
const app = express();

app.set('views', __dirname + "/views")
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + "/repo"));

app.get('/', (req, res) => {
    fs.readFile(__dirname + "/repo/a.txt", (err, data) => {
        //res.send(data);
        res.render('RepoView',{"name":"Praveen"})
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})




