# Backend cadastro de empresa

A tabela necessária para o projeto está disponível abaixo para que possa ser criada no banco de dados e dar início à aplicação.

# Como Criar uma Tabela

```sql
CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(255) NOT NULL,
    senha VARCHAR(255),
    nome_empresa VARCHAR(255),
    cnpj_empresa VARCHAR(255),
    cep_empresa VARCHAR(255),
    endereco VARCHAR(255),
    numero VARCHAR(255),
    telefone VARCHAR(255),
    email VARCHAR(255)
    );
```

Caso queira deletar sua tabela

```sql
DROP TABLE empresas;
```
