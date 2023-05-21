const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
   title:String,
   auther:String,
   IBSN:Number,
   image:String,
   Year_of_publication:Number
})

const Book_model = mongoose.model("Books",BookSchema)

module.exports= {
    Book_model
}