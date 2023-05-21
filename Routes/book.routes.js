const { Book_model } = require("../model/bookModel");
const express = require("express")
const bookRouter=express.Router()
bookRouter.use(express.json())
bookRouter.post("/",async (req, res) => {
    const payload = req.body;
    try {
      const new_book = new Book_model(payload);
      await new_book.save();
      res.send("New Book has been posted successfully.");
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  bookRouter.get("/",async (req,res)=>{
    try{
        const data = await Book_model.find()
        res.send(data)
    }catch(err){
      res.send(err.message)
    }
})

bookRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        await Book_model.findByIdAndDelete({_id:id})
        res.send({"msg":"book is deleted"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

bookRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const payload= req.body
    try{
        await Book_model.findByIdAndUpdate({_id:id},payload)
        res.send({"msg":"book is Updated"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

module.exports={
    bookRouter
}