import { Sequelize } from "sequelize";
import { config } from "dotenv";
import Chat from "./Models/Chat.js";
import User from "./Models/User.js";
//env
config();
const { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_USERNAME } =
  process.env;

//sequelize

const sequelize = new Sequelize({
  database: DATABASE_NAME,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  dialect: "postgres",
  logging: false,
});

export const ChatModel = Chat(sequelize);
export const UserModel = User(sequelize)

//relations
ChatModel.belongsTo(UserModel)
UserModel.belongsTo(ChatModel)

export default sequelize;
