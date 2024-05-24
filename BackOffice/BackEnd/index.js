const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require("multer");
const path = require("path");
// creating instances of the imports
const app = new express();
const port = 8080;
var jsonParser = bodyParser.json();
// setting up express
app.use(cors());
app.use(jsonParser);

// setting up mysql connection with express
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Lolo@2024",
  //password: "80085",
  database: "nrp",
  port: "3306",
});

// Rota para pegar todos os usuários
app.get("/usuarios", function (req, res) {
  connection.query("SELECT * FROM usuario", (err, rows) => {
    if (err) throw err;

    res.send({ usuarios: rows });
  });
});

//Rota para pegar UM usuário
app.post("/usuario", (req, res) => {
  const email = req.body.email;
  connection.query(
    `SELECT * FROM usuario WHERE email = "${email}"`,

    (err, result) => {
      if (err) {
        throw err;
      }

      if (result && result.length > 0) {
        res.send(result[0]);
      } else {
        res.status(404).send("Email não encontrado");
      }
    }
  );
});

// Rota para Login
app.post("/usuario/login", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  connection.query(
    "SELECT * FROM usuario WHERE email = ?",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        if (result.length > 0) {
          console.log(result);
          bcrypt.compare(senha, result[0].senha, (err, response) => {
            if (err) {
              console.log(err);
            }
            if (response) {
              console.log(response);
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

// Rota para cadastrar usuário
app.post("/usuario/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const email = req.body.email;
  const senha = req.body.senha;
  const grupo = req.body.grupo;
  console.log(req.body.email);
  bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
      res.send({ err: err });
    }
    connection.query(
      `INSERT INTO usuario (nome, cpf, email, senha, status_cliente, grupo) values ('${nome}','${cpf}' , '${email}', '${hash}', "Ativo", '${grupo}')`,

      (err, result) => {
        if (err) {
          res.send(err);
        }

        if (result) {
          res.send("Conta criada com sucesso!");
        }
      }
    );
  });
});

//Rota para alterar usuário
app.put("/usuario/alterar", (req, res) => {
  const email = req.body.email;
  const grupo = req.body.grupo;
  const nome = req.body.nome;
  console.log(grupo);
  const cpf = req.body.cpf;

  connection.query(
    `UPDATE usuario SET GRUPO = '${grupo}', NOME ='${nome}', CPF ='${cpf}' WHERE EMAIL = '${email}'`,
    (err, result) => {
      if (result.affectedRows > 0) {
        res.status(200).send("Atualizado com sucesso");
      } else {
        res.status(400).send("Impossibilitado de alteração ");
      }
    }
  );
});

app.put("/usuario/alterarStatus", (req, res) => {
  let status = req.body.status_cliente;
  let email = req.body.email;
  connection.query(
    `UPDATE usuario SET status_cliente = '${status}' WHERE EMAIL = '${email}'`,
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result.affectedRows > 0) {
        res.status(200).send("Atualizado com sucesso");
      } else {
        res.status(404).send("Email não encontrado ou nenhum dado atualizado");
      }
    }
  );
});

//busca parcial do usuario
app.post("/usuario/pesquisar", (req, res) => {
  let nome = req.body.nome;
  console.log(req.body);
  connection.query(
    `SELECT * FROM usuario WHERE nome LIKE '%${nome}%';`,
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send(result);
    }
  );
});

//busca todos os produtos por ordem decrescente
app.get("/produtos", function (req, res) {
  connection.query(
    `SELECT * FROM produto ORDER BY id_produto DESC`,
    (err, rows) => {
      if (err) throw err;

      res.send({ produtos: rows });
    }
  );
});

app.get("/produtos/lancamentos", function (req, res) {
  connection.query(
    `SELECT * FROM produto WHERE status_produto = "Ativo" ORDER BY id_produto DESC limit 5`,
    (err, rows) => {
      if (err) throw err;

      res.send({ produtos: rows });
    }
  );
});

app.get("/produto/:cod_produto", function (req, res) {
  let cod_produto = req.params.cod_produto;
  let produto;
  connection.query(
    `SELECT * FROM produto WHERE cod_produto = "${cod_produto}"`,
    (err, rows) => {
      if (err) throw err;
      let result = JSON.parse(JSON.stringify(rows[0]));

      res.send(result);
    }
  );
});

app.get("/produto/:cod_produto/imagens", function (req, res) {
  let cod_produto = req.params.cod_produto;
  connection.query(
    `SELECT * FROM IMAGEM WHERE cod_produto = "${cod_produto}"`,
    (err, rows) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//busca todos os produtos por ordem decrescente
app.get("/produtos", function (req, res) {
  connection.query(
    `SELECT * FROM produto ORDER BY id_produto DESC`,
    (err, rows) => {
      if (err) throw err;

      res.send({ produtos: rows });
    }
  );
});

app.get("/produtos/lancamentos", function (req, res) {
  connection.query(
    `SELECT * FROM produto WHERE status_produto = "Ativo" ORDER BY id_produto DESC limit 5`,
    (err, rows) => {
      if (err) throw err;

      res.send({ produtos: rows });
    }
  );
});

app.get("/produto/:cod_produto", function (req, res) {
  let cod_produto = req.params.cod_produto;
  let produto;
  connection.query(
    `SELECT * FROM produto WHERE cod_produto = "${cod_produto}"`,
    (err, rows) => {
      if (err) throw err;
      let result = JSON.parse(JSON.stringify(rows[0]));

      res.send(result);
    }
  );
});

app.get("/produto/:cod_produto/imagens", function (req, res) {
  let cod_produto = req.params.cod_produto;
  connection.query(
    `SELECT * FROM IMAGEM WHERE cod_produto = "${cod_produto}"`,
    (err, rows) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

//CADASTRAR PRODUTOS!!!!!!!!!!!!!!!!!!!!!!!!!!
const storageA = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../FrontEnd/public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.body.cod_produto +
        file.fieldname.substring(file.fieldname.length - 1) +
        path.extname(file.originalname)
    );
  },
});

const storageB = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../FrontOffice/FrontEnd/public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.body.cod_produto +
        file.fieldname.substring(file.fieldname.length - 1) +
        path.extname(file.originalname)
    );
  },
});

const uploadImage = multer({ storage: storageA });
const uploadToFrontEnd = multer({ storage: storageB });

app.post("/produto/inserir", uploadToFrontEnd.any(), (req, res) => {
  console.log(req.body);
  let nome_disco = req.body.nome_disco;
  const estoque = req.body.estoque;
  const valor = req.body.valor;
  const artista = req.body.artista;
  const genero = req.body.genero;
  const ano = req.body.ano;
  const avaliacao = req.body.avaliacao;
  const descricao = req.body.descricao;
  const cod_produto = req.body.cod_produto;
  const principal = req.body.imagem_principal;
  console.log(req.body);
  console.log(req.files);
  connection.query(
    `INSERT INTO produto (cod_produto, nome_disco, estoque, valor, artista, genero, ano, avaliacao, status_produto, descricao, imagem_principal) values ('${cod_produto}','${nome_disco}', ${estoque}, ${valor}, '${artista}', '${genero}', ${ano}, ${avaliacao}, "Ativo", '${descricao}', ${principal})`,
    (err, result) => {
      if (err) {
        throw err;
      }
      if (result) {
        res.send("Produto adicionado com sucesso!");
      }
    }
  );
});

app.use("/fotos", express.static("../FrontEnd/public"));

app.post("/produto/inserir/imagens", uploadImage.any(), (req, res) => {
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      console.log("oi");
      console.log(req.body.cod_produto);
      console.log(req.files[i].filename);
      connection.query(
        `INSERT INTO imagem (cod_produto, imagem) values("${req.body.cod_produto}", "${req.files[i].filename}")`,
        (err, result) => {
          if (err) throw err;
        }
      );
    }
    res.send("Imagem adicionada com sucesso!");
  }
});

app.post(
  "/produto/uploadImageToFrontEnd",
  uploadToFrontEnd.any(),
  (req, res) => {}
);

// deletar arquivos
var fs = require("fs");
app.post("/deleteFilesFromFolder", (req, res) => {
  var imagens;
  connection.query(
    `
	SELECT * FROM IMAGEM WHERE cod_produto = "${req.body.cod_produto}"`,
    (err, result) => {
      let result1 = Object.values(JSON.parse(JSON.stringify(result)));
      result1.forEach((v) => {
        fs.unlink(`../FrontEnd/public/${v.imagem}`, function (err) {
          if (err) throw err;
          console.log("File deleted!");
        });
        fs.unlink(
          `../../FrontOffice/FrontEnd/public/${v.imagem}`,
          function (err) {
            if (err) throw err;
            console.log("File deleted!");
          }
        );
      });
    }
  );
});

//ALTERAR PRODUTO!!!
app.put("/produto/alterar", (req, res) => {
  let cod_produto = req.body.cod_produto;
  let estoque = req.body.estoque;
  let valor = req.body.valor;
  let avaliacao = req.body.avaliacao;
  let descricao = req.body.descricao;
  let principal = req.body.imagem_principal;

  connection.query(
    `UPDATE produto SET estoque = '${estoque}', valor = '${valor}',avaliacao = '${avaliacao}', descricao = '${descricao}', imagem_principal ="${principal}" WHERE cod_produto = '${cod_produto}'`,
    (err, result) => {
      if (err) {
        throw err;
      }

      if (result.affectedRows > 0) {
        res.status(200).send("Atualizado com sucesso");
      } else {
        res.status(404).send("Nenhum dado atualizado");
      }
    }
  );
});

app.delete("/produto/deletar/imagens/:cod_produto", (req, res) => {
  console.log("aeae", req.params);
  const cod_produto = req.params.cod_produto;

  connection.query(
    `DELETE from imagem WHERE cod_produto = "${cod_produto}"`,
    (err, result) => {
      if (err) throw err;

      if (result) {
        res.send(result);
      }
    }
  );
});
app.put("/produto/alterar/quantidade", (req, res) => {
  let quantidade = req.body.estoque;
  let cod_produto = req.body.cod_produto;
  connection.query(
    `UPDATE produto set ESTOQUE = "${quantidade}" WHERE cod_produto = "${cod_produto}"`,
    (err, result) => {
      if (err) throw err;

      if (result) {
        res.status(200).send("Estoque atualizado com sucesso");
      }
    }
  );
});
app.put("/produto/alterar/status", (req, res) => {
  let status_produto = req.body.status_produto;
  let cod_produto = req.body.cod_produto;
  connection.query(
    `UPDATE produto set status_produto = "${status_produto}" WHERE cod_produto = "${cod_produto}"`,
    (err, result) => {
      if (err) throw err;

      if (result) {
        res.status(200).send("Produto atualizado com sucesso");
      }
    }
  );
});

//busca por um produto por id
app.post("/produto/:cod_produto", (req, res) => {
  let cod_produto = req.body.cod_produto;
  console.log(req.body);
  connection.query(
    `SELECT * FROM produto WHERE cod_produto = '${cod_produto}';`,
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send(result[0]);
    }
  );
});

// Pesquisar produtos
app.post("/produtos/pesquisar", (req, res) => {
  let nomeDisco = req.body.nomeDisco;
  console.log(req.body);
  connection.query(
    `SELECT * FROM produto WHERE nome_disco LIKE '%${nomeDisco}%';`,
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send(result);
    }
  );
});

app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}, BACK OFFICE`);
});
