const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database.config');

class Service extends Model{};

Service.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},
{
    sequelize,
    tableName: "services",
    modelName: "Service",
});

module.exports = Service;