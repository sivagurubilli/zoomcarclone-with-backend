

const mongoose = require("mongoose")

const bookcarSchema =  new mongoose.Schema({
    City:{type:String,required:true},
    location:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    fuel:{type:String,required:true},
    seater:{type:Number,required:true},
    type:{type:String,required:true},
    Rating:{type:String,required:true},
    img:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})



module.exports = mongoose.model("bookingcar",bookcarSchema)