/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const carsController = require("./carsController");
const authController = require("./authController");
const GoogleLoginOrRegister = require("./GoogleLoginOrRegister");

module.exports = {
  carsController,
  authController,
  GoogleLoginOrRegister,
  
};
