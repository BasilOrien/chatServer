import { Server } from "socket.io";
import express, { urlencoded } from "express";
import { createServer } from "http";
import SocketIoHandler from "./webSocket/socket.js";
import router from "./routes/router.js";
import cors from "cors";

export const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/", router);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
SocketIoHandler(io);
app.set("port", 3001);

export default httpServer;
