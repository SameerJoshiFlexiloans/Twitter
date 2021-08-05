module.exports = (sequelize,DataTypes)=>{
    const follow = sequelize.define("Follow",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        followedTo:DataTypes.STRING,
        followedBy:DataTypes.STRING
    });
    return follow;
}