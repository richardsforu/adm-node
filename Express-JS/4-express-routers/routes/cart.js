const express = require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.json(["Cart1", "Cart2","Cart3","Cart4"])
})

module.exports=router;