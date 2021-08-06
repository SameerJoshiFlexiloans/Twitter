module.exports=(sequelize,DataTypes)=>{
    const posts=sequelize.define('posts',{
        post_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        content:{
            type:DataTypes.STRING(1000)
        },
        user_id:{
            type:DataTypes.INTEGER,
            foreinKey:true
        }
    });
    return posts;
}