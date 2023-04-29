import { Router } from "express";
import { ChatModel, UserModel } from "../../Sequelize/database.js";
const messages = Router();

messages.get("/", async function (req, res) {
  try {
    const chats = await ChatModel.findAll({
      include: UserModel,
    });
    if (chats.length) {
      res.json(chats);
    } else {
      res.json("No hay chats para mostrar.");
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

messages.post("/", async function (req, res) {
  const { message, userid } = req.body;
  try {
    const newChat = await ChatModel.create({
      message,
    });

    await newChat.setUser(userid);
    res.json(true);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
export default messages;
