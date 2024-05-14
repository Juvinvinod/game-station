require('dotenv').config();
const app = require('./app');
const db = require("./config/mongoDB");

const port  = process.env.PORT || 3000;
db(); 
app.listen(port,()=>{
    console.log("Server is running!!");
})