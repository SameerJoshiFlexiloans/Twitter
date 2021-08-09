const db = require('../config');

exports.registerUser = async (req,res)=>{
    try{
        let {firstname,email}=req.body;
        if(await db.userModel.findOne({where:{email:email},attributes:['user_id']}) != null){
            res.status(400).send("User already exist");
        }
        else{
            await db.userModel.create({
                firstname:firstname,
                email:email
            });
            res.status(200).send("user succesfully added");
        }
    }catch(err){
        console.log(err);
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
        let {userId,postId}=req.body;
        if(await db.likeModel.findOne({where:{user_id:userId,post_id:postId},attributes:['id']}) != null){
            res.send("Post already liked");
        }
        else{
            await db.likeModel.create({
                user_id:userId,
                post_id:postId
            });
            res.send(req.body);
        }
    }catch(err){
        res.send(err);
    }
}

exports.followUser = async (req,res)=>{
    try{
        let{followedTo,followedBy} = req.body;
        if(await db.followModel.findOne({where:{followed_to:followedTo,followed_by:followedBy},attributes:['id']}) != null){
            res.status(400).send("User already followed");
        }
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

exports.getUsers = async (req,res)=>{
    let {firstname,email}=req.body;
    let value = await db.userModel.findAll({where:{firstname:firstname,email:email}});
    res.send(value);
}