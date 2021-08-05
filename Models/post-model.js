module.exports=(sequelize,DataTypes)=>{
    const posts=sequelize.define('Posts',{
        content:{
            type:DataTypes.STRING(1000)
        },
        email:{
            type:DataTypes.STRING
        },
        likes:{
            type:DataTypes.INTEGER,
            defaultValue:0
        }
    });
    return posts;
}