const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database.config');

class Bill extends Model{};

Bill.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},{
    sequelize,
    tableName: "bills",
    modelName: "Bill",
});

module.exports = Bill;