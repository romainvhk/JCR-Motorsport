const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database.config');

class Brand extends Model{};

Brand.init({
    id: {
        type :DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},
{
    sequelize,
    tableName: "brand",
    modelName: "brand",
});

module.exports = Brand;