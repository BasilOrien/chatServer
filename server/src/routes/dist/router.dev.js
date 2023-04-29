"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _messages = _interopRequireDefault(require("./middlewares/messages.js"));

var _users = _interopRequireDefault(require("./middlewares/users.js"));

var _auth = _interopRequireDefault(require("./middlewares/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get("/", function (req, res) {
  res.json({
    message: "Server Ok"
  });
});
router.use("/chat", _messages["default"]);
router.use("/users", _users["default"]);
router.use("/auth", _auth["default"]);
var _default = router;
exports["default"] = _default;