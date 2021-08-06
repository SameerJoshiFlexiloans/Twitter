const express = require('express');
const {registerUser,postData,likePost,followUser,getFollow,getPosts,getUserFromPost}=require('./controller/route-controller');
const router = express.Router();

router.post('/register',registerUser);

router.post('/post',postData);

router.post('/like',likePost);

router.post('/follow',followUser);

router.post('/getFollowers',getFollow);

router.post('/getPosts',getPosts);

router.post('/getUserFromPost',getUserFromPost)

module.exports=router;