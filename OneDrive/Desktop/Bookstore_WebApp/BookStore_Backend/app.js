const express =require("express");
const mongoose=require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

// MiddleWares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/books",router);  // localhost:5000/books





mongoose
.connect(
    Give your MongoDB URL.
)
.then(()=>console.log("Connected to Database")) 
.then(()=>{
    app.listen(5000);
}).catch((err) => console.log(err));
