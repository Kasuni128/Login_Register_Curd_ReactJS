module.exports = (sequelize, DataTypes) => {

    const post = sequelize.define("Post",{
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return post;
}