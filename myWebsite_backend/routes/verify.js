const express = require("express");
const router = express.Router();
const Post = require('../models/post');


router.post('/', async (req, res) => {
    const verify_data = req.body;
   // console.log(verify_data);

    try {
        const data_base = await Post.find({email:verify_data.email});
        //console.log(data_base[0]._id)
        if(data_base[0].password === verify_data.password)
        {
        res.json({
            verify: 'yes',
            name:data_base[0].Name,
            spec_id:data_base[0]._id
        })
        }
        else
        {
            res.json({
                verify:'no',
                name:data_base[0].Name
            })
        }
    } catch (err) {
        res.json({
            verify:'no'
        })
    }
});


module.exports = router;