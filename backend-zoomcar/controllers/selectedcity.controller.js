


const express = require("express")

const router = express.Router()

const  selectcitydata = require("../models/city.model.js")


router.post("" , async(req,res)=>{
    try{
        const selectcitydata1 = await selectcitydata.create(req.body)
        return res.send(selectcitydata1)
    }catch(err){
        return res.send(err.message)
    }
})


module.exports = router