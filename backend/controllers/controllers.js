import { db } from "../db.js";

export const getEmpresas = (_, res) => {
  const q = "SELECT * FROM empresas";

  db.query(q, (err, data) => {
    if (err) {
      // Em caso de erro, defina o código de status HTTP 500 (Internal Server Error) e retorne um objeto JSON com o erro.
      return res.json(err);
    }

    // Em caso de sucesso, defina o código de status HTTP 200 (OK) e retorne os dados como JSON.
    return res.status(200).json(data);
  });
};

export const addEmpresas = (req, res) => {
  console.log("Rota addEmpresa chamada");
  const Query =
    "INSERT INTO empresas(`nome_cliente`, `senha`, `nome_empresa`, `cnpj_empresa`, `cep_empresa`, `endereco`, `numero`, `telefone`, `email`) VALUES(?)";

  const values = [
    req.body.nome_cliente,
    req.body.senha,
    req.body.nome_empresa,
    req.body.cnpj_empresa,
    req.body.cep_empresa,
    req.body.endereco,
    req.body.numero,
    req.body.telefone,
    req.body.email,
  ];

  db.query(Query, [values], (err) => {
    if (err) {
      console.log("Erro", err);
      return res.json(err);
    }
    return res.status(200).json("Empresa cadastrada com sucesso");
  });
};

export const updateEmpresas = (req, res) => {
  console.log("Chamado updateEmpresa");
  const Query =
    "UPDATE empresas SET `nome_cliente` = ?, `senha` = ?, `nome_empresa` = ?, `cnpj_empresa` = ?, `cep_empresa` = ?, `endereco` = ?, `numero` = ?, `telefone` = ?, `email` = ? WHERE `id` = ?";

  const values = [
    req.body.nome_cliente,
    req.body.senha,
    req.body.nome_empresa,
    req.body.cnpj_empresa,
    req.body.cep_empresa,
    req.body.endereco,
    req.body.numero,
    req.body.telefone,
    req.body.email,
  ];

  db.query(Query, [...values, req.params.id], (err) => {
    if (err) {
      console.log("Erro", err);
      return res.json(err);
    }

    return res.status(200).json("Empresa atualizada com sucesso");
  });
};

export const deleteEmpresas = (req, res) => {
  const Query = "DELETE FROM empresas WHERE `id` = ?";

  db.query(Query, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Empresa deletada com sucesso");
  });
};
