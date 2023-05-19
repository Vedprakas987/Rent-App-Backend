const express = require("express");
const { contact_model } = require("../model/contacts.model");
const { Relater } = require("../middleware/UsertoBookRelater");
const jwt = require("jsonwebtoken")
const contactRouter = express.Router();

contactRouter.use(express.json());

contactRouter.post("/", Relater, async (req, res) => {
  const payload = req.body;
  try {
    const new_contact = new contact_model(payload);
    await new_contact.save();
    res.send("New contact has been posted successfully.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

contactRouter.get("/",async (req,res)=>{
    try{
        const data = await contact_model.find()
        res.send(data)
    }catch(err){
      res.send(err.message)
    }
})

contactRouter.get("/profile",Relater,async (req,res)=>{
    const token =  req?.headers?.authorization?.split(' ')[0]
    const { userId } = jwt.verify(token, "ved");
 

   let query = { userid: userId };

   if (req.query) {
  query = { ...query, ...req.query };
   }

    try{
        const data = await contact_model.find(query)
        res.send(data)
    }catch(err){
      res.send(err.message)
    }
})
contactRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        await contact_model.findByIdAndDelete({_id:id})
        res.send({"msg":"post is deleted"})
    }catch(err){
        res.send({"msg":err.message})
    }
})

contactRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const payload= req.body
    try{
        await contact_model.findByIdAndUpdate({_id:id},payload)
        res.send({"msg":"post is Updated"})
    }catch{
        res.send({"msg":"post went wrong"})
    }
})
module.exports = {
  contactRouter
};
