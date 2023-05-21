const express = require("express")
require('dotenv').config();
const connection = require("./connection/db")
const { userRouter } = require("./Routes/user.routes")
const { contactRouter } = require("./Routes/contact.routes")
const cors = require("cors");
const { bookRouter } = require("./Routes/book.routes");
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/contacts",contactRouter)
app.use("/books",bookRouter)
const port = process.env.PORT||4800;
console.log(port)
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err.message)
  }
});
 