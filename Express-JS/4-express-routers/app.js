const express = require('express');
var morgan = require('morgan')

const itemsRouter = require('./routes/items')
const cartRouter = require('./routes/cart')
const ordersRouter = require('./routes/orders')


const app = express();
app.use(morgan('tiny'))


//-----------------------------

app.use("/items", itemsRouter);
app.use("/cart", cartRouter);
app.use("/orders", ordersRouter);

//-----------------------------

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})


