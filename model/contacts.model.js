const mongoose = require("mongoose")
const contactCardSheme = mongoose.Schema({
    name:String,
    contactNum:Number,
    location:String,
    Pincode:Number,
    District:String,
    image:String,
    Desc:String,
    userid:String,
    Price:String,
    imageCollection:Array,
    category:String,
    Type:String
})

const contact_model = mongoose.model("contactcard",contactCardSheme)

module.exports={
    contact_model
}