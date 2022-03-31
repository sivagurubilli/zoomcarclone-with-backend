
const mongoose = require("mongoose")

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/zoomcar?retryWrites=true&w=majority")
}