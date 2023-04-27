import { Router } from "express";
import { ChatModel, UserModel } from "../../Sequelize/database.js";
import User from "../../Sequelize/Models/User.js";
const messages = Router();

messages.get("/", async function (req, res) {
  try {
    const chats = await ChatModel.findAll();
    if (chats.length) {
      res.json(chats);
    } else {
      res.json("No hay chats para mostrar.");
    }
  } catch (error) {
    res.status(500).json({
      message: "Se ha encontrado un error en la ruta solicitada",
    });
  }
});

messages.post("/", async function (req, res) {
  const { username, message } = req.body;
  try {
    if (!message) {
      return res.status(400).json({
        message: "Faltan datos para completar la solicitud.",
      });
    }
    if (typeof message !== "string" || message.length > 255) {
      return res.status(400).json({
        message: "El mensaje no cumple con los requisitos.",
      });
    }
    if (typeof username !== "string") {
      return res.status(400).json({
        message: `El nombre de usuario no cumple con los requisitos.`,
      });
    }
    const user = await UserModel.findOne({
      where: {
        username: username,
      },
    });

    if (user) {
      ChatModel.create(
        {
          message,
        },
        {
          include: UserModel,
        }
      ).then((newChat) => {
        if (newChat) {
          return res.redirect("/chat");
        }
      });
    } else {
      res.json({
        message: "Se ha producido un error.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Se ha encontrado un error en la ruta solicitada",
    });
  }
});
export default messages;
