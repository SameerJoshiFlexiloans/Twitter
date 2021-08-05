const express = require('express');
const {registerUser,postData,likePost,followUser,getFollow}=require('./controller/route-controller');
const router = express.Router();

router.post('/register',registerUser);

router.post('/post',postData);

router.post('/like',likePost);

router.post('/follow',followUser);

router.post('/getFollowers',getFollow);

module.exports=router;