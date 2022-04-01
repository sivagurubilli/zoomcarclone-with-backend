
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


module.exports = router