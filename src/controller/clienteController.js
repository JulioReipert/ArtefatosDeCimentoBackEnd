import {
  listar,
  inserir,
  alterar,
  remover,
} from "../repository/clienteRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get("/cliente", async (req, resp) => {
  let registros = await listar();
  resp.send(registros);
});

endpoints.post("/cliente", async (req, resp) => {
  let cliente = req.body;

  let novoId = await inserir(cliente);
  resp.send({ novoId });
});

endpoints.put("/cliente/:id", async (req, resp) => {
  let id = req.params.id;
  let cliente = req.body;

  let linhasAfetadas = await alterar(id, cliente);
  resp.send({ linhasAfetadas });
});

endpoints.delete("/cliente/:id", async (req, resp) => {
  let id = req.params.id;

  let linhasAfetadas = await remover(id);
  if (linhasAfetadas == 0) {
    return resp.status(404).send({ erro: "Registro não encontrado." });
  }
  resp.send({ linhasAfetadas });
});

export default endpoints;
