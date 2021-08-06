const db = require('../config');

exports.registerUser=async (req,res)=>{
    let {firstname,email}=req.body;
    await db.userModel.create({
        firstname:firstname,
        email:email
    });
    res.send(req.body);
}

exports.postData = async (req,res)=>{
    let {content,userId} = req.body;
    await db.postModel.create({
        content:content,
        userId:userId
    });
    res.send(req.body);
}

exports.likePost = async (req,res)=>{
    let {email,postId}=req.body;
    await db.likeModel.create({
        email:email,
        postId:postId
    });
    let previousCount = await db.postModel.findOne({where:{id:postId}});
    await db.postModel.update({likes:previousCount.dataValues.likes + 1},{
        where:{
            email:email
        }
    });
    res.send(`${previousCount.dataValues.content} liked`);
}

exports.followUser = async (req,res)=>{
    let{followedTo,followedBy} = req.body;
    await db.followModel.create({
        followedTo:followedTo,
        followedBy:followedBy
    });
    res.send(`${followedBy} now follows ${followedTo}`);
}

exports.getFollow = async (req,res)=>{
    let {userValue}=req.body;
    let followers = await db.userModel.findAll({include:{
            model:db.followModel,
            where:{followedBy:1}
        }
    });
    res.send(followers);
}

exports.getPosts = async (req,res)=>{
    let {userId} = req.body;
    let posts = await db.userModel.findAll({include:{
        model:db.postModel
    },where:{userId:userId}});
    res.send(posts);
}

exports.getUserFromPost = async (req,res)=>{
    let {postId} = req.body;
    let users = await db.postModel.findAll({include: [{
        model: db.userModel,
        where: {
            userId: 1
        },
    }]});
    res.send(users);
}