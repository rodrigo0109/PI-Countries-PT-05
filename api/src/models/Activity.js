const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,

        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3'),

        },
        duration: {
            type: DataTypes.INTEGER,

        },
        season: {
            type: DataTypes.ENUM('Summer', 'Automn', 'Winter', 'Spring')
        }
    }, {
        timestamps: false
    })
}