const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
multer = require("multer");
const path = require("path");
// creating instances of the imports
const app = new express();
const port = 8081;
var jsonParser = bodyParser.json();
// setting up express
app.use(cors());
app.use(jsonParser);

// setting up mysql connection with express
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Lolo@2024",
  database: "nrp",
  port: "3306",
});

// Rota para Login
app.post("/cliente/login", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  console.log(req.body);
  connection.query(
    "SELECT * FROM cliente WHERE email = ?",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        if (result.length > 0) {
          bcrypt.compare(senha, result[0].senha, (err, response) => {
            if (err) {
              console.log(err);
            }
            if (response) {
              res.send(true);
            }
          });
        } else {
          res.send({
            message: "Usuário inexistente",
          });
        }
      }
    }
  );
});

// Rota para cadastrar cliente
app.post("/cliente/cadastrar", (req, res) => {
  const cpf = req.body.cpf;
  const email = req.body.email;
  const nome_completo = req.body.nome;
  const data_nascimento = req.body.data_nascimento;
  const genero = req.body.genero;
  const endereco_faturamento_cep = req.body.cep;
  const endereco_faturamento_numero = req.body.numero;
  const endereco_faturamento_complemento = req.body.complemento;
  const senha = req.body.senha;

  console.log(req.body.data_nascimento);
  bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
      res.send({ err: err });
    }
    connection.query(
      `INSERT INTO cliente (cpf, email, nome_completo, data_nascimento, genero, endereco_faturamento_cep, endereco_faturamento_numero, endereco_faturamento_complemento, senha) values ('${cpf}', '${email}', '${nome_completo}', '${data_nascimento}','${genero}', ${endereco_faturamento_cep}, '${endereco_faturamento_numero}', '${endereco_faturamento_complemento}', '${hash}' )`,

      (err, result) => {
        if (err) {
          res.send(err);
        }

        if (result) {
          console.log(hash);
          res.send("Conta criada com sucesso!");
        }
      }
    );
  });
});

app.get("/clientes", (req, res) => {
  connection.query(`SELECT * FROM CLIENTE`, (err, rows) => {
    if (err) throw err;

    res.send({ cliente: rows });
  });
});

app.get("/cliente/:email", (req, res) => {
  const email = req.params.email;
  connection.query(
    `SELECT * FROM CLIENTE WHERE email = "${email}"`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows[0]);
    }
  );
});

app.get("/cliente/:cpf/enderecos", (req, res) => {
  const cpf = req.params.cpf;

  connection.query(
    `SELECT * FROM ENDERECO_ENTREGA WHERE CPF = ${cpf}`,
    (err, rows) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

app.post("/cliente/:cpf/endereco", (req, res) => {
  const cep = req.body.cep;
  const numero = req.body.numero;
  const complemento = req.body.complemento;

  connection.query(
    `INSERT INTO endereco_entrega (cpf, cep, numero, complemento, ativo) 
values (${req.params.cpf},${cep}, ${numero}, ${complemento}, 1);`,
    (err, rows) => {
      if (err) {
        res.send(err);
      }

      if (rows) {
        res.send("Endereço Cadastrado com Sucesso!");
      }
    }
  );
});

app.put("/cliente/alterar", (req, res) => {
  const email = req.body.email;
  const nome_completo = req.body.nome_completo;
  const senha = req.body.senha;
  const cpf = req.body.cpf;
  const genero = req.body.genero;

  bcrypt.hash(senha, saltRounds, (err, hash) => {
    connection.query(
      `UPDATE cliente SET CPF = '${cpf}', EMAIL = '${email}', NOME_COMPLETO = '${nome_completo}', GENERO = '${genero}'`,
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.status(200).send("Atualizado com sucesso");
        } else {
          res.status(400).send("Impossibilitado de alteração ");
        }
      }
    );
  });
});

// essa sempre tem que ficar ABAIXO de tudo gurizada
app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}, FRONT OFFICE`);
});
