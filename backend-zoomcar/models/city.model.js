const mongoose =require("mongoose")


const citySchema =  new mongoose.Schema({
    City:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("citydata",citySchema)