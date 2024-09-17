const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const { type } = require("os");

const app = express();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

mongoose.connect(" mongodb://127.0.0.1:27017/kevindb").then(()=>console.logg("MongoDB Connected")).catch(err=>console.log("mongo error",err));
const User=mongoose.model("user",userSchema);



app.listen(8000, () => console.log("server is start !"));
