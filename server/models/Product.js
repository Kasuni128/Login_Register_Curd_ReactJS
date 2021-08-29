module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define("Product",{
        Productname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        prodcutprice:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        productdes:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        qty:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return product;
}