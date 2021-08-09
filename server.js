const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());

app.use("/", require("./route/user.route"));


app.listen((port), () => {
    console.log(`server up and running on port ${port}`)
})

mongoose.connect((process.env.MONGO_URL), {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
    if(!err){
        console.log("DB connected");
    }else{
        console.log(err);
    }
})