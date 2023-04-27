import express from "express";
import { config } from "dotenv";
import router from "./routes/router.js";
//config
config({ path: "../.env" });

//define
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", router);
app.get("*", function(req,res) {
    res.status(404).send('Error 404: La ruta especificada no existe.')
})

//export
export default app;
