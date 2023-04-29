import { Router } from "express";
import { ChatModel, UserModel } from "../../Sequelize/database.js";
const users = Router();

users.get("/", async function (req, res) {
  const users = await UserModel.findAll();
  res.json(users);
});

users.post("/", async function (req, res) {
  const { username } = req.body;
  try {
    const findUser = await UserModel.findOne({
      where: {
        username: username,
      },
    });

    if (findUser) {
      return res.json(true);
    } else
      await UserModel.create({
        username,
      }).then((user) => {
        if (user) {
          return res.json(true);
        } else {
          return res.json({
            message: "Se ha producido un error, intente nuevamente.",
          });
        }
      });
  } catch (error) {
    return res.status(400).json({
      message: "Error en la ruta solicitada",
    });
  }
});

export default users;
