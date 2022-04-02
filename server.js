

const express = require("express")

const userController = require("./backend-zoomcar/controllers/car.controller")
const bookcarController = require("./backend-zoomcar/controllers/bookingdeatail.controller")
const selectedCity = require("./backend-zoomcar/controllers/selectedcity.controller")

const cors = require("cors")
const app = express()
app.use(express.json())

app.use(cors())

app.use("/checkpost",bookcarController)
app.use("/cityselect",selectedCity)

app.use("/allcars",userController)


const connect = require("./backend-zoomcar/configs/db")
const port = process.env.PORT||2000
app.listen(port,async function(){
    try{
        await connect()
        console.log("listen 1")
    }catch(e){
        console.log(e)
    }
})