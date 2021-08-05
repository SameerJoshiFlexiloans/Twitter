module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('Users',{
        firstname:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            primaryKey:true
        }
    });
    return users;
}