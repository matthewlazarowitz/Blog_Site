const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');


class Thought extends Model { }


Thought.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  text: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
    validate: {
      min: 3,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, 
  },


}, 
{
  sequelize: db,
  modelName: 'thought',
 
});


module.exports = Thought;
