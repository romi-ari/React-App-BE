'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userGoogle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userGoogle.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    googleId: DataTypes.STRING,
    registeredVia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userGoogle',
  });
  return userGoogle;
};