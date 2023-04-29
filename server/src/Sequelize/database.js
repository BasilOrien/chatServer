import { Sequelize } from "sequelize";
import { config } from "dotenv";
import Chat from "./Models/Chat.js";
import User from "./Models/User.js";
//env
config();
const { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_USERNAME } =
  process.env;

//sequelize

const sequelize = new Sequelize(
  "postgresql://cuentaparaestudiosf:gGkHpeDEJ91h@ep-noisy-wind-718280.us-east-2.aws.neon.tech/neondb",
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    dialectModule: require("pg"),
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
      },
    },
  }
);

export const ChatModel = Chat(sequelize);
export const UserModel = User(sequelize);

//relations
ChatModel.belongsTo(UserModel);
UserModel.belongsTo(ChatModel);

export default sequelize;
