import { Router } from "express";
import messages from "./middlewares/messages.js";

const router = Router();

router.get("/", function (req, res) {
  res.json({
    message: "Server Ok",
  });
});

router.use("/chat", messages)

export default router;
