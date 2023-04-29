"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../../Sequelize/database.js");

var users = (0, _express.Router)();
users.get("/", function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_database.UserModel.findAll());

        case 2:
          users = _context.sent;
          res.json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
users.post("/", function _callee2(req, res) {
  var username;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = req.body.username;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_database.UserModel.create({
            username: username
          }).then(function (user) {
            if (user) {
              res.json({
                message: "El usuario fue creado con exito."
              });
            } else {
              res.json({
                message: "Se ha producido un error, intente nuevamente."
              });
            }
          }));

        case 4:
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(400).json({
            message: "Error en la ruta solicitada"
          }));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 6]]);
});
var _default = users;
exports["default"] = _default;