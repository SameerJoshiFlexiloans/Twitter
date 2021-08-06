module.exports = (sequelize,DataTypes)=>{
    const follow = sequelize.define("follow",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        followed_to:{
            type:DataTypes.INTEGER,
        },
        followed_by:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }
    });
    return follow;
}