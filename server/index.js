import { config } from "dotenv";
import app from "./src/app.js";
import sequelize, { UserModel } from "./src/Sequelize/database.js";

//config env
config();
const { SERVER_PORT } = process.env || 3001;

//initialize

function serverStart() {
  try {
    sequelize.sync({ force: true }).then(async function (something) {
      await UserModel.create({
        username: "BasilOrien",
      });

      app.listen(
        SERVER_PORT,
        console.log(`Server running on port ${SERVER_PORT}`)
      );
    });
  } catch (error) {
    throw new Error(error);
  }
}

(async function () {
  const users = await UserModel.findAll();
  console.log(users);
})();

serverStart();
