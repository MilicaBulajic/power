'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TaskList.init({
    name: DataTypes.STRING,
    project_id: DataTypes.INTEGER,
    column_index: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TaskList',
  });
  return TaskList;
};