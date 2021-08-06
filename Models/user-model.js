module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('users',{
        user_id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        firstname:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
        }
    });
    return users;
}