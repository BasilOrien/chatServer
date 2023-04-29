import { UserModel } from "../Sequelize/database.js";

export default function SocketIoHandler(io) {
  io.on("connect", function (socket) {
    io.emit("success");
    socket.on("getUser", async function (username) {
      UserModel.findOne({
        where: {
          username: username,
        },
      }).then((user) => {
        io.emit("setUser", username, user.id);
      });
    });
    socket.on("getGlobalChat", function () {
      io.emit("getGlobalChat");
    });
  });
}
