const express = require('express');
const fs = require('fs');
const app = express();

app.set('views', __dirname + "/views")
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + "/repo"));

app.get("/repo", (req, res) => {
    fs.readdir(__dirname + "/repo", (err, result) => {
        // res.send(result)
        res.render('RepoView', { result }) // <RepoView result={result}/>
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})




