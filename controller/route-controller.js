const db = require('../config');

exports.registerUser=async (req,res)=>{
    let {firstname,lastname,email}=req.body;
    await db.userModel.create({
        firstname:firstname,
        lastname:lastname,
        email:email
    });
    res.send(req.body);
}

exports.postData = async (req,res)=>{
    let {content,email} = req.body;
    await db.postModel.create({
        content:content,
        email:email
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
    let {email}=req.body;
    let followers = await db.followModel.findAll({where:{followedTo:email}});
    res.send(followers.map(follow=>follow.followedBy));
}