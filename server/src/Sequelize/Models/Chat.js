import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Chat = sequelize.define("Chat", {
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  return Chat;
}
