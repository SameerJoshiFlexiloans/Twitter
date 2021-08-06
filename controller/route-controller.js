const db = require('../config');

exports.registerUser=async (req,res)=>{
    try{
        let {firstname,email}=req.body;
        await db.userModel.create({
            firstname:firstname,
            email:email
        });
        res.send(req.body);
    }catch(err){
        res.send(err)
    }
}

exports.postData = async (req,res)=>{
    try{
        let {content,userId} = req.body;
        await db.postModel.create({
            content:content,
            user_id:userId
        });
        res.send(req.body);
    }catch(err){
        res.send(err);
    }
}

exports.likePost = async (req,res)=>{
    try{
        let {email,postId}=req.body;
        await db.likeModel.create({
            email:email,
            post_id:postId
        });
        res.send(req.body);
    }catch(err){
        res.send(err);
    }
}

exports.followUser = async (req,res)=>{
    try{
        let{followedTo,followedBy} = req.body;
        await db.followModel.create({
            followed_to:followedTo,
            followed_by:followedBy
        });
        res.send(`${followedBy} now follows ${followedTo}`);
    }catch(err){
        res.send(err)
    }
}

exports.getFollow = async (req,res)=>{
    try{
        let {userValue}=req.body;
        let followers = await db.userModel.findAll({include:{
                model:db.followModel,
                where:{followed_by:1}
            }
        });
        res.send(followers);
    }catch(err){
        res.send(err)
    }
}

exports.getPosts = async (req,res)=>{
    try{
        let {userId} = req.body;
        let posts = await db.userModel.findAll({include:{
            model:db.postModel
        },where:{user_id:userId}});
        res.send(posts);
    }catch(err){
        res.send(err);
    }
}

exports.getUserFromPost = async (req,res)=>{
    try{
        let {postId} = req.body;
        let users = await db.postModel.findAll({include: [{
            model: db.userModel,
            where: {
                user_id: 1
            },
        }]});
        res.send(users);
    }catch(err){
        res.send(err);
    }
}