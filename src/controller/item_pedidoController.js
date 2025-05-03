import {
  listar,
  inserir,
  alterar,
  remover,
} from "../repository/item_pedidoRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get("/item_pedido", async (req, resp) => {
  let registros = await listar();
  resp.send(registros);
});

endpoints.post("/item_pedido", async (req, resp) => {
  let item_pedido = req.body;

  let novoId = await inserir(item_pedido);
  resp.send({ novoId });
});

endpoints.put("/item_pedido/:id", async (req, resp) => {
  let id = req.params.id;
  let item_pedido = req.body;

  let linhasAfetadas = await alterar(id, item_pedido);
  resp.send({ linhasAfetadas });
});

endpoints.delete("/item_pedido/:id", async (req, resp) => {
  let id = req.params.id;

  let linhasAfetadas = await remover(id);
  if (linhasAfetadas == 0) {
    return resp.status(404).send({ erro: "Registro não encontrado." });
  }
  resp.send({ linhasAfetadas });
});

export default endpoints;
