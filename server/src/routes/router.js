import { Router } from "express";
import messages from "./middlewares/messages.js";
import users from "./middlewares/users.js";
import auth from "./middlewares/auth.js";

const router = Router();

router.get("/", function (req, res) {
  res.json({
    message: "Server Ok",
  });
});

router.use("/chat", messages);
router.use("/users", users);
router.use("/auth", auth);

export default router;
