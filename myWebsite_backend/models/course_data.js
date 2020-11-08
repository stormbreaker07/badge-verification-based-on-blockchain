const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    
   spec_key:
   {
       type:String,
       required: true
   },
   course_name:{
       type:String,
       required: true
   },
   date:{
    type:Date,
    default:Date.now
   },
   university:{
       type:String,
       required: true
   },
   issuer_name:{
       type:String,
       required: true
   },
   issuer_desig:{
       type:String,
       required: true
   },
   credential:{
       type:String,
       required: true
   },
   tran_hash:{
       type:String,
       required: true
   }
   
});


module.exports = mongoose.model('Course' , PostSchema);
