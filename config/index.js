const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');

const userModel = require('../models/user-model')(sequelize,DataTypes);
const postModel = require('../models/post-model')(sequelize,DataTypes);
const likeModel = require('../models/like-model')(sequelize,DataTypes);
const followModel = require('../models/follow-model')(sequelize,DataTypes);
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