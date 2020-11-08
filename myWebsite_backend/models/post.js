const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    Name: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    signinstatus: {
        type : String,
        required: true
    }
});


module.exports = mongoose.model('Posts' , PostSchema);
