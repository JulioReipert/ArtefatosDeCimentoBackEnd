import {
  listar,
  inserir,
  alterar,
  remover,
} from "../repository/materia_primaRepository.js";

import { Router } from "express";
const endpoints = Router();

endpoints.get("/materia_prima", async (req, resp) => {
  let registros = await listar();
  resp.send(registros);
});

endpoints.post("/materia_prima", async (req, resp) => {
  let materia_prima = req.body;

  let novoId = await inserir(materia_prima);
  resp.send({ novoId });
});

endpoints.put("/materia_prima/:id", async (req, resp) => {
  let id = req.params.id;
  let materia_prima = req.body;

  let linhasAfetadas = await alterar(id, materia_prima);
  resp.send({ linhasAfetadas });
});

endpoints.delete("/materia_prima/:id", async (req, resp) => {
  let id = req.params.id;

  let linhasAfetadas = await remover(id);
  if (linhasAfetadas == 0) {
    return resp.status(404).send({ erro: "Registro não encontrado." });
  }
  resp.send({ linhasAfetadas });
});

export default endpoints;
