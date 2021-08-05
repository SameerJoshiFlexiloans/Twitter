const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');

const userModel = require('../Models/user-model')(sequelize,DataTypes);
const postModel = require('../Models/post-model')(sequelize,DataTypes);
const likeModel = require('../Models/like-model')(sequelize,DataTypes);
const followModel = require('../Models/follow-model')(sequelize,DataTypes);
const db = {};

db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.userModel=userModel;
db.postModel=postModel;
db.likeModel=likeModel;
db.followModel=followModel;
db.sequelize.sync({force:false}).then(()=>{
    console.log('DB synched');
}).catch((err)=>{
    console.log("Synching error: "+err);
});

module.exports=db;