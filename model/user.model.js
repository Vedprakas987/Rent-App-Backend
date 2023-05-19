const mongoose = require("mongoose")
const userSchema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    avtar:String
})

const userModel = mongoose.model("userdatas",userSchema)

module.exports={
    userModel
}