const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.json(["Order1","Order2","Order3","Order4"])
})

router.post('/', (req,res)=>{
    res.json({message:"New Order has placed successfully"})
})


module.exports=router


