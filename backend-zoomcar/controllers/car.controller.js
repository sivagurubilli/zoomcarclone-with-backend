
const express = equire= require("express")

const router = express.Router()

const carsdata = require("../models/car.models.js")


router.get("",async(req,res)=>{
    try{
        const cardata = await carsdata.find().lean().exec()
        return res.send(cardata)
    }catch(err){
        return res.send(err.message)
    }
})


module.exports = router