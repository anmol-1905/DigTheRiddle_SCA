const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.DATABASE_URL;
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectDB = () => {
   mongoose.connect(url, connectionParams).then(()=>{
    console.log("connected succesfully to the database");
   })
   .catch(err=>{
    console.log("connection failed: ",err);
   })
}

module.exports = connectDB;