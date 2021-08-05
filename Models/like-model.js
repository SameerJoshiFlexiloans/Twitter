module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('Likes',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        email:DataTypes.STRING,
        postId:DataTypes.INTEGER
    });
    return users;
}