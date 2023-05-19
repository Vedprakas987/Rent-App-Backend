require('dotenv').config();
const mongoose = require("mongoose")
const connection = mongoose.connect(process.env.mongo_url||"mongodb+srv://vedprakash4gs:vedsinha@cluster0.2y9i4ac.mongodb.net/reach_there")
module.exports={
    connection
}