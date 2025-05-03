import {
  listar,
  inserir,
  alterar,
  remover,
} from "../repository/produtoRepositoty.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get("/produto", async (req, resp) => {
  let registros = await listar();
  resp.send(registros);
});

endpoints.post("/produto", async (req, resp) => {
  let produto = req.body;

  let novoId = await inserir(produto);
  resp.send({ novoId });
});

endpoints.put("/produto/:id", async (req, resp) => {
  let id = req.params.id;
  let produto = req.body;

  let linhasAfetadas = await alterar(id, produto);
  resp.send({ linhasAfetadas });
});

endpoints.delete("/produto/:id", async (req, resp) => {
  let id = req.params.id;

  let linhasAfetadas = await remover(id);
  if (linhasAfetadas == 0) {
    return resp.status(404).send({ erro: "Registro não encontrado." });
  }
  resp.send({ linhasAfetadas });
});

export default endpoints;
