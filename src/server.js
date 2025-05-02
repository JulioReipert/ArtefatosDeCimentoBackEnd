import "dotenv/config";
import express from "express";
import cors from "cors";
import addRotas from "./routes.js";

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

addRotas(servidor);

const PORT = process.env.PORT;

servidor.listen(PORT, () => {
  console.log(`API subiu na porta ${PORT}!`);
});
