const express = require("express");
const app = express();
var cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const routePost = require('./routes/posts');
const routeCourse = require('./routes/course_status');
const routeverify = require('./routes/verify');

app.use('/posts' , routePost);
app.use('/course' , routeCourse);
app.use('/verify' , routeverify);

app.get('/' , (req,res) => {

    res.send(' BACKEND IS WORKING CORRECTLY I GUESS ');
});



mongoose.connect('mongodb://localhost:27017/about' ,{ useNewUrlParser: true } , () => {console.log('connected to mongo db')})



app.listen(5000);