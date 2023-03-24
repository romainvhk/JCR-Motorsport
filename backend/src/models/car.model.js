const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database.config');

class Car extends Model{};

Car.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    sequelize,
    tableName: "car",
    modelName: "car",
});

module.exports = Car;