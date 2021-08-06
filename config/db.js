const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Users','root','root@1234',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:10000
    }
});

async function authenticateDB(){
    await sequelize.authenticate().then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log("Error: "+err);
    });
}

authenticateDB();
module.exports=sequelize;