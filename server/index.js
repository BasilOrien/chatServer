import sequelize from "./src/Sequelize/database.js";
import httpServer, { app } from "./src/app.js";

sequelize.sync({ force: true }).then(function () {
  httpServer.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
  });
});
