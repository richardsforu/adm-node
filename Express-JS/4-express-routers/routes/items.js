const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.json(["Iten1","Item2","Item3","Item4"])
})

.get("/:itemId/reviews",(req,res)=>{
    res.json(["Review1","Review2","Review3","Review4"])
})

.get("/:itemId/reviews/:userName",(req,res)=>{
    res.json(["Review1-U2","Review2-U2","Review3-U2","Review4-U2"])
})

module.exports=router


