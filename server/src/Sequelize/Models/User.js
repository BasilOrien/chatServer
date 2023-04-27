import { DataTypes } from "sequelize";

export default function (sequelize) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(16),
      defaultValue: `Participante_${Date.now()}`,
    },
  });
  return User;
}
