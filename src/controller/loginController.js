import {
  listar,
  inserir,
  alterar,
  remover,
} from "../repository/loginRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get("/login", async (req, resp) => {
  let registros = await listar();
  resp.send(registros);
});

endpoints.post("/login", async (req, resp) => {
  let login = req.body;

  let novoId = await inserir(login);
  resp.send({ novoId });
});

endpoints.put("/login/:id", async (req, resp) => {
  let id = req.params.id;
  let login = req.body;

  let linhasAfetadas = await alterar(id, login);
  resp.send({ linhasAfetadas });
});

endpoints.delete("/login/:id", async (req, resp) => {
  let id = req.params.id;

  let linhasAfetadas = await remover(id);
  if (linhasAfetadas == 0) {
    return resp.status(404).send({ erro: "Registro não encontrado." });
  }
  resp.send({ linhasAfetadas });
});

export default endpoints;
