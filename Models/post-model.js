module.exports=(sequelize,DataTypes)=>{
    const posts=sequelize.define('posts',{
        postId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        content:{
            type:DataTypes.STRING(1000)
        },
        userId:{
            type:DataTypes.INTEGER,
            foreinKey:true
        }
    });
    return posts;
}