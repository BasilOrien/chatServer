"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  var User = sequelize.define("User", {
    username: {
      type: _sequelize.DataTypes.STRING(16),
      defaultValue: "".concat(Date.now())
    }
  });
  return User;
}