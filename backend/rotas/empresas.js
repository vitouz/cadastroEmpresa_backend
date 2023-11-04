import express from "express";

import {
  getEmpresas,
  addEmpresas,
  updateEmpresas,
  deleteEmpresas,
  // buscaCep,
} from "../controllers/controllers.js";

const Rotas = express.Router();

// Defina a rota GET usando getEmpresas como o manipulador de rota, sem os parênteses.
Rotas.get("/", getEmpresas);

Rotas.post("/", addEmpresas);

Rotas.put("/:id", updateEmpresas);

Rotas.delete("/:id", deleteEmpresas);

export default Rotas;
