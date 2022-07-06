const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
   name:{
       type: String,
       required: true
   },
   author:{
       type: String,
       reuired:true
   },
   description:{
    type: String,
    reuired:true
},
price:{
    type: Number,
    reuired:true
},
available:{
    type: Boolean,
    reuired:true
},
image: {
    type: String,
    required: true,
},

});

module.exports =mongoose.model("Book", bookSchema);

//books
