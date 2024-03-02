require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DataBase connect Succsfully..........!");
}).catch((err)=>{
    console.log(err);
});