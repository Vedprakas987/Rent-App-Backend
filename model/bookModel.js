const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
   title:String,
   auther:String,
   IBSN:String,
   image:String,
   Year_of_publication:Number,
   Price:Number
})

const Book_model = mongoose.model("Books",BookSchema)

module.exports= {
    Book_model
}