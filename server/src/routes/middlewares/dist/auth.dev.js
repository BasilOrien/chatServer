"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../../Sequelize/database.js");

var auth = (0, _express.Router)();
auth.get("/", function (req, res) {
  res.json({
    message: "No tienes permiso para estar aqui"
  });
});
auth.post("/", function _callee(req, res) {
  var username, user, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          _context.prev = 1;

          if (!(username.length > 0)) {
            _context.next = 14;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(_database.UserModel.findOne({
            where: {
              username: username
            }
          }));

        case 5:
          user = _context.sent;

          if (!user) {
            _context.next = 10;
            break;
          }

          res.json(user);
          _context.next = 14;
          break;

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(_database.UserModel.create({
            username: username
          }));

        case 12:
          newUser = _context.sent;
          res.json(newUser);

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          res.json({
            message: _context.t0
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
});
var _default = auth;
exports["default"] = _default;