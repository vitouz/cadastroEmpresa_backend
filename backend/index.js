import express from "express";
import userRoutes from "./rotas/empresas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800, () => {
  console.log("Servidor ouvindo na porta 8800");
});
