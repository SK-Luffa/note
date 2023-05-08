const sequelize = require('./db')
const { DataTypes } = require("sequelize")

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdady: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
  


}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true

});

module.exports = Student