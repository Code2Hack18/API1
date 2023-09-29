
const express = require("express");
const serverless = require('serverless-http');
require('dotenv').config();
// const autocannon = require("autocannon");
const cors = require("cors");
const app = express();
const router = express.Router();


// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log("Server is Listening on PORT: ", PORT);
// });

router.get("/status", cors(), (req, res) => {
  const status = {
    id: "ALH001",
    name: "Utkarsh",
    company: "Audax Labs",
    Degination: "Developer",
    photo: "https://www.gla.ac.in/Nexus/download/photo/Utkarsh-Ojha.jpg",
    friends: [

        "Bhauk",
        "nikhil",
        "piyush",
        "Vivek Singh"
    ],
    contact:"91952989",
    orderiD:"SWWI1234"
};
res.send(status);

});

router.get("/status/customer/",(req,res) =>{
  const status = {
    name:"Admin",
    company :"Audax"
  }

  res.send(status)
  //accepted request and delayed in the provision in the changing the 
  //port can cause the improvising the statement.
})



app.use('/.netlify/functions/api', router);
module.exports.handler= serverless(app);