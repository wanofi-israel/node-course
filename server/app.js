const express = require("express");
const app = express();
const task=require('./routes/task');
const connectDB = require("./db/connect");
require('dotenv').config()

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("<center><h1>Server Running</h1></center>");
});
app.use("/api/v1",task)

const start = async () => {
   try {
     await connectDB(process.env.MONGO_URI)
     app.listen(5000, console.log("server is listening on port 5000..."));
   } catch (error) {
    console.log(error)
   }
}

start()
