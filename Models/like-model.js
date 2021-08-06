module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('likes',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        userId:{
            type:DataTypes.INTEGER,
            foreignKey:true
        },
        postId:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }
    });
    return users;
}