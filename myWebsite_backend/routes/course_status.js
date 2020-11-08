const express = require("express");
const router = express.Router();
const Post = require('../models/course_data');

//get back all the post
router.get('/',async (req, res) => {
    try{
        const posts= await Post.find();
        res.json(posts);
    }catch(err) {
        res.json({message:err})
    }
});


//get a specific post
router.get("/:postId",async (req,res) => {
    const input = req.params.postId;
    const x = input.split('=');
    if(x[0] === 'sp_key')
    {
        try {
        const post = await Post.find({spec_key: x[1]});
        // console.log(res.json(post));
        res.json(post);
        }
        catch(err) {
            res.json({message:err});
        }
    }
    else{
    try {
        const post = await Post.find({_id:input});
        res.json(post);
    }catch(err) {
        res.json({message : err});
    }
}
})

//submit a the post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        const saved_post = await post.save();
        // console.log(saved_post);
        res.json(saved_post);
    } catch (err) {
        res.json({ message: err })
    }
});


//delete a post
router.delete('/:postId'  , async (req, res) => {
   try {
    const removePost = await Post.remove({_id : req.params.postId});
   res.json(removePost);
    }catch(err) {
        res.json({message:err})
    }
});

//update a post 
router.patch("/:postId" , async (req,res) => {

    try{
        const updatedPost = await Post.updateOne({spec_key:req.params.postId},
             {$set:{credential:req.body.credential}} 
             );
             res.json(updatedPost);
    }catch(err) {
        res.json({message:err});
    }
});



module.exports = router; 