module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('likes',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.INTEGER,
            foreignKey:true
        },
        post_id:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }
    });
    return users;
}