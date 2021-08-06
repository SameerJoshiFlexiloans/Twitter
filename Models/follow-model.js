module.exports = (sequelize,DataTypes)=>{
    const follow = sequelize.define("follow",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        followedTo:{
            type:DataTypes.INTEGER,
        },
        followedBy:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }
    });
    return follow;
}