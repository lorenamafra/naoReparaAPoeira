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
const port = 8080;
var jsonParser = bodyParser.json();

// setting up express
app.use(cors());
app.use(jsonParser);

// setting up mysql connection with express
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "TJrs4321@",
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
  const senha = req.body.senha;
  const status = req.body.status;
  const cpf = req.body.cpf;

  bcrypt.hash(senha, saltRounds, (err, hash) => {
    connection.query(
      `UPDATE usuario SET GRUPO = '${grupo}', NOME ='${nome}', SENHA ='${hash}', CPF ='${cpf}' WHERE EMAIL = '${email}'`,
      (err, result) => {
        if (result.affectedRows > 0) {
          res.status(200).send("Atualizado com sucesso");
        } else {
          res.status(400).send("Impossibilitado de alteração ");
        }
      }
    );
  });
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

//CADASTRAR PRODUTOS!!!!!!!!!!!!!!!!!!!!!!!!!!
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../FrontEnd/public");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const uploadImage = multer({ storage: storage }).array("images", 12);
app.post("/produto/inserir", uploadImage, (req, res) => {
  console.log(req.body);
  let nome_disco = req.body.nome_disco;
  const estoque = req.body.estoque;
  const valor = req.body.valor;
  const artista = req.body.artista;
  const genero = req.body.genero;
  const ano = req.body.ano;
  const avaliacao = req.body.avaliacao;
  const descricao = req.body.descricao;

  var abbr = artista
    .split(" ")
    .map(function (item) {
      return item[0];
    })
    .join("");

  nome_disco = nome_disco.replaceAll(" ", "");

  cod_produto = abbr.concat(nome_disco, ano);

  connection.query(
    `INSERT INTO produto (cod_produto, nome_disco, estoque, valor, artista, genero, ano, avaliacao, status_produto, descricao) values ('${cod_produto}','${nome_disco}', ${estoque}, ${valor}, '${artista}', '${genero}', ${ano}, ${avaliacao}, "Ativo",'${descricao}')`,
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result) {
        res.send("Produto adicionado com sucesso!");
      }
    }
  );
});

//ALTERAR PRODUTO!!!
app.put("/produto/alterarProduto", (req, res) => {
  let cod_produto = req.body.cod_produto;
  let estoque = req.body.estoque;
  let valor = req.body.valor;
  let artista = req.body.artista;
  let avaliacao = req.body.avaliacao;
  let descricao = req.body.descricao;
  let status_produto = req.body.status_produto;

  connection.query(
    `UPDATE produto SET estoque = ${estoque}, valor = ${valor}, artista = '${artista}', avaliacao = ${avaliacao}, descricao = '${descricao}', status ='${status_produto} WHERE cod_produto = ${cod_produto}`,
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

//busca por um produto por id
app.post("/usuario/pesquisar", (req, res) => {
  let nome = req.body.nome;
  console.log(req.body);
  connection.query(
    `SELECT * FROM produto WHERE cod_produto = ?;`,
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send(result);
    }
  );
});

//busca parcial do nome do produto
app.post("/usuario/pesquisar", (req, res) => {
  let nome = req.body.nome;
  console.log(req.body);
  connection.query(
    `SELECT * FROM produto WHERE nome LIKE '%${nome_disco}%';`,
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

// listar os 10 primeiros itens da tabela (use essa rota só na página 1)
app.get("/produtos", function (req, res) {
  //página= página atual * index por página
  connection.query(
    `SELECT * FROM produto LIMIT 10 OFFSET ${pagina} ORDER BY id_produto DESC`,
    (err, rows) => {
      if (err) throw err;

      res.send({ produtos: rows });
    }
  );
});

// app.put("/alterar-nome", (req, res) => {
// 	const email = req.body.email;
// 	const nome = req.body.nome;

// 	connection.query(
// 		`UPDATE usuario SET nome = "${nome}" WHERE email = "${email}"`,
// 		(err, result) => {
// 			if (err) {
// 				throw err;
// 			}

// 			if (result.affectedRows > 0) {
// 				res.send("nome atualizado com sucesso");
// 			} else {
// 				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
// 			}
// 		}
// 	);
// });

// app.put("/alterar-cpf", (req, res) => {
// 	const email = req.body.email;
// 	const cpf = req.body.cpf;

// 	connection.query(
// 		`UPDATE usuario SET CPF = "${cpf}" WHERE email = "${email}"`,
// 		(err, result) => {
// 			if (err) {
// 				throw err;
// 			}

// 			if (result.affectedRows > 0) {
// 				res.send("CPF atualizado com sucesso");
// 			} else {
// 				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
// 			}
// 		}
// 	);
// });

// app.put("/alterar-senha", (req, res) => {
// 	const email = req.body.email;
// 	const senha = req.body.senha;

// 	connection.query(
// 		`UPDATE usuario SET SENHA = "${senha}" WHERE email = "${email}"`,
// 		(err, result) => {
// 			if (err) {
// 				throw err;
// 			}

// 			if (result.affectedRows > 0) {
// 				// Se a atualização for bem-sucedida, envie uma resposta de sucesso
// 				res.send("Senha atualizada com sucesso");
// 			} else {
// 				// Se nenhum registro for afetado, pode significar que o email não foi encontrado
// 				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
// 			}
// 		}
// 	);
// });

// app.put("/alterar-status", (req, res) => {
// 	const email = req.body.email;
// 	const status = req.body.status;

// 	connection.query(
// 		`UPDATE usuario SET STATUS_CLIENTE = "${status}" WHERE email = "${email}"`,
// 		(err, result) => {
// 			if (err) {
// 				throw err;
// 			}

// 			if (result.affectedRows > 0) {
// 				// Se a atualização for bem-sucedida, envie uma resposta de sucesso
// 				res.send("Status atualizado com sucesso");
// 			} else {
// 				// Se nenhum registro for afetado, pode significar que o email não foi encontrado
// 				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
// 			}
// 		}
// 	);
// });

// app.put("/alterar-status", (req, res) => {
// 	const email = req.body.email;
// 	const status = req.body.status;

// 	connection.query(
// 		`UPDATE usuario SET STATUS_CLIENTE = "${status}" WHERE email = "${email}"`,
// 		(err, result) => {
// 			if (err) {
// 				throw err;
// 			}

// 			if (result.affectedRows > 0) {
// 				// Se a atualização for bem-sucedida, envie uma resposta de sucesso
// 				res.send("Status atualizado com sucesso");
// 			} else {
// 				// Se nenhum registro for afetado, pode significar que o email não foi encontrado
// 				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
// 			}
// 		}
// 	);
// });

app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}, BACK OFFICE`);
});
