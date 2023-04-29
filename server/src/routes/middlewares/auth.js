import { Router } from "express";
import { UserModel } from "../../Sequelize/database.js";

const auth = Router();

auth.get("/", function (req, res) {
  res.json({
    message: "No tienes permiso para estar aqui",
  });
});

auth.post("/", async function (req, res) {
  const { username } = req.body;
  try {
    if (username.length > 0) {
      const user = await UserModel.findOne({
        where: {
          username: username,
        },
      });
      if (user) {
        res.json(user);
      } else {
        const newUser = await UserModel.create({
          username: username,
        });
        res.json(newUser);
      }
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

export default auth;
