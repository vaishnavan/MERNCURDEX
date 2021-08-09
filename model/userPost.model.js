const mongoose = require("mongoose");

const userPostSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    }
},
    {timestamps: true}
)

module.exports = mongoose.model("UserPost", userPostSchema)