"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../../Sequelize/database.js");

var messages = (0, _express.Router)();
messages.get("/", function _callee(req, res) {
  var chats;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_database.ChatModel.findAll({
            include: _database.UserModel
          }));

        case 3:
          chats = _context.sent;

          if (chats.length) {
            res.json(chats);
          } else {
            res.json("No hay chats para mostrar.");
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
messages.post("/", function _callee2(req, res) {
  var _req$body, username, message, userid, newChat;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, message = _req$body.message, userid = _req$body.userid;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_database.ChatModel.create({
            message: message
          }));

        case 4:
          newChat = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(newChat.setUser(userid));

        case 7:
          res.json({
            done: true
          });
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
var _default = messages;
exports["default"] = _default;