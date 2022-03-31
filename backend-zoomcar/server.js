

const express = require("express")

const userController = require("./controllers/car.controller")

const cors = require("cors")
const app = express()
app.use(express.json())

app.use(cors())

app.use("/allcars",userController)
const connect = require("./configs/db")

app.listen(2000,async function(){
    try{
        await connect()
        console.log("listen")
    }catch(e){
        console.log(e)
    }
})