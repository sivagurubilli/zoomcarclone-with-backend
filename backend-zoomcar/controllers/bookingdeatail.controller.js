
const express = require("express")

const router = express.Router()

const  bookingcar = require("../models/post.model.js")


router.post("" , async(req,res)=>{
    try{
        const bookcardata = await bookingcar.create(req.body)
        return res.send(bookcardata)
    }catch(err){
        return res.send(err.message)
    }
})


router.get("",async(req,res)=>{
    try{
        let bookcardata1 = await bookingcar.find().lean().exec()
        return res.send(bookcardata1)
    }catch(err){
        return res.send(err.message)
    }
})

module.exports = router