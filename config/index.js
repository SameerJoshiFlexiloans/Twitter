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
    console.log("Synching error: there are many errors in this "+err);
});

db.userModel.hasMany(db.postModel,{foreignKey:'user_id'});
db.postModel.belongsTo(db.userModel,{foreignKey:'user_id'});

db.userModel.hasMany(db.followModel,{foreignKey:'followed_by'});
db.userModel.hasMany(db.followModel,{foreignKey:'followed_to'});

db.postModel.hasMany(db.likeModel,{foreignKey:'post_id'});
db.userModel.hasMany(db.likeModel,{foreignKey:'user_id'});

module.exports=db;