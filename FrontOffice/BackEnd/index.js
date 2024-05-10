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
	password: "80085",
	database: "nrp",
	port: "3306",
});

// Rota para Login
app.post("/cliente/login", (req, res) => {
	const email = req.body.email;
	const senha = req.body.senha;
	console.log(req.body);
	console.log("Oii");
	connection.query(
		"SELECT * FROM cliente WHERE email = ?",
		email,
		(err, result) => {
			console.log(result);
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
	const endereco_faturamento_logradouro = req.body.logradouro;
	const senha = req.body.senha;
	console.log(req.body);
	console.log(req.body.data_nascimento);
	bcrypt.hash(senha, saltRounds, (err, hash) => {
		if (err) {
			res.send({ err: err });
		}
		connection.query(
			`INSERT INTO cliente (cpf, email, nome_completo, data_nascimento, genero, endereco_faturamento_cep, endereco_faturamento_numero, endereco_faturamento_complemento, endereco_faturamento_logradouro, senha) values ('${cpf}', '${email}', '${nome_completo}', '${data_nascimento}','${genero}', '${endereco_faturamento_cep}', '${endereco_faturamento_numero}', '${endereco_faturamento_complemento}', '${endereco_faturamento_logradouro}', '${hash}' )`,

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

app.post("/check/cpf", (req, res) => {
	console.log(req.body.cpf);
	var mensagens = [];
	connection.query(
		`SELECT * FROM CLIENTE WHERE CPF = ${req.body.cpf}`,
		(err, rows) => {
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length > 0) {
				res.send(true);
			} else {
				res.send(false);
			}
		}
	);
	console.log(mensagens);
});

app.post("/check/email", (req, res) => {
	connection.query(
		`SELECT * FROM CLIENTE WHERE email = "${req.body.email}"`,
		(err, rows) => {
			console.log(rows);
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length > 0) {
				res.send(true);
			} else {
				res.send(false);
			}
		}
	);
});

app.post("/check/cpf", (req, res) => {
	console.log(req.body.cpf);
	var mensagens = [];
	connection.query(
		`SELECT * FROM CLIENTE WHERE CPF = ${req.body.cpf}`,
		(err, rows) => {
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length > 0) {
				res.send(true);
			} else {
				res.send(false);
			}
		}
	);
	console.log(mensagens);
});

app.post("/check/email", (req, res) => {
	connection.query(
		`SELECT * FROM CLIENTE WHERE email = "${req.body.email}"`,
		(err, rows) => {
			console.log(rows);
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length > 0) {
				res.send(true);
			} else {
				res.send(false);
			}
		}
	);
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
			delete rows[0].senha;
			res.send(rows[0]);
		}
	);
});

app.get("/cliente/:cpf/enderecos", (req, res) => {
	const cpf = req.params.cpf;

	connection.query(
		`SELECT * FROM ENDERECO_ENTREGA WHERE CPF = "${cpf}" AND ativo = 1`,
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
		`INSERT INTO endereco_entrega (cpf, cep, numero, complemento, logradouro, ativo) 
values (${req.params.cpf}, '${cep}', '${numero}', '${complemento}', '${req.body.logradouro}', 1)`,
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
	const cpf = req.body.cpf;
	const genero = req.body.genero;
	connection.query(
		`UPDATE cliente SET EMAIL = '${email}', NOME_COMPLETO = '${nome_completo}', GENERO = '${genero}' WHERE CPF = ${cpf}`,
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

app.put("/cliente/alterarSenha", (req, res) => {
	const email = req.body.email;
	const senhaNova = req.body.senhaNova;

	bcrypt.hash(senhaNova, saltRounds, (err, hash) => {
		connection.query(
			`UPDATE cliente SET SENHA = '${hash}' WHERE EMAIL = '${email}'`,
			(err, result) => {
				if (err) throw err;
				console.log(result);
				if (result.affectedRows > 0) {
					res.status(200).send("Atualizado com sucesso");
				} else {
					res.status(400).send("Impossibilitado de alteração ");
				}
			}
		);
	});
});

app.put("/endereco/inativar", (req, res) => {
	console.log(req.body);
	const id_endereco = req.body.id_endereco;
	connection.query(
		`UPDATE endereco_entrega set ATIVO = false WHERE id_endereco = '${id_endereco}'`,
		(err, rows) => {
			if (err) {
				res.send(err);
			}

			if (rows) {
				res.send("Endereço Alterado!");
			}
		}
	);
});
app.put("/endereco/alterar/despadronizar", (req, res) => {
	const cpf = req.body.cpf;
	console.log(cpf);
	connection.query(
		`UPDATE endereco_entrega set PADRAO = false WHERE cpf = '${cpf}'`,
		(err, rows) => {
			if (err) {
				res.send(err);
			}
		}
	);
});

app.get("/:cpf/enderecoPadrao", (req, res) => {
	connection.query(
		`SELECT * FROM endereco_entrega where CPF = ${req.params.cpf} AND padrao = 1`,
		(err, rows) => {
			if (err) {
				res.send(err);
			}
			if (rows) {
				if (rows[0] == undefined || rows[0] == "") {
					res.send(undefined);
				} else {
					res.send(rows[0]);
				}
			}
		}
	);
});

app.put("/endereco/alterar/padrao", (req, res) => {
	console.log(req.body);
	const id_endereco = req.body.id_endereco;
	connection.query(
		`UPDATE endereco_entrega set PADRAO = true WHERE id_endereco = '${id_endereco}'`,
		(err, rows) => {
			if (err) {
				res.send(err);
			}

			if (rows) {
				res.send("Endereço Alterado!");
			}
		}
	);
});
app.put("/cliente/:cpf/endereco/alterar/faturamento", (req, res) => {
	console.log("oi", req.body);
	console.log(req.params);
	const endereco_faturamento_cep = req.body.cep;
	const endereco_faturamento_numero = req.body.numero;
	const endereco_faturamento_complemento = req.body.complemento;

	connection.query(
		`UPDATE cliente set endereco_faturamento_cep = "${endereco_faturamento_cep}", endereco_faturamento_numero = "${endereco_faturamento_numero}", endereco_faturamento_complemento = "${endereco_faturamento_complemento}", endereco_faturamento_logradouro = "${req.body.logradouro}" where cpf = "${req.params.cpf}"`,
		(err, rows) => {
			if (err) {
				res.send(err);
			}
			if (rows) {
				res.send("Endereço se tornou de Faturamento com Sucesso!");
			}
		}
	);
});
app.post("endereco/adicionar"),
	(req, res) => {
		console.log(req.body);
		const endereco_faturamento_cep = req.body.endereco_faturamento_cep;
		const endereco_faturamento_numero = req.body.numero;
		const endereco_faturamento_complemento = req.body.complemento;

		connection.query(
			`INSERT INTO cliente (endereco_faturamento_cep, endereco_faturamento_numero, endereco_faturamento_complemento) 
      values (${req.params.cpf},${endereco_faturamento_cep}, ${endereco_faturamento_numero}, ${endereco_faturamento_complemento}, 1);`,
			(err, rows) => {
				if (err) {
					res.send(err);
				}
				if (rows) {
					res.send("Endereço Cadastrado com Sucesso!");
				}
			}
		);
	};

app.post("/pedido/criar", (req, res) => {
	console.log(req.body);
	const cpf = req.body.cliente.cpf;
	const subtotal = req.body.valor.subTotal;
	const valor_total = req.body.valor.total;
	const tipo_frete = req.body.envio.tipoFrete;
	const valor_frete = req.body.valor.valorFrete;
	const forma_pagamento = req.body.pagamento.formaPagamento;
	const id_endereco = req.body.envio.endereco.id_endereco;

	console.log(
		cpf,
		subtotal,
		valor_total,
		tipo_frete,
		valor_frete,
		forma_pagamento,
		id_endereco
	);
	let nf = new Date().valueOf();
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;
	connection.query(`INSERT INTO pedido (cpf, subtotal, valor_total, tipo_frete, valor_frete, forma_pagamento, id_endereco, status, NF, data) values
	(${cpf},${subtotal}, ${valor_total}, "${tipo_frete}", ${valor_frete}, "${forma_pagamento}", ${id_endereco}, "Aguardando pagamento", ${nf}, "${today}");
	`);

	res.status(200).send("Pedido criado");
});

app.post("/pedido/item/criar", (req, res) => {
	let id_pedido = req.body.id_pedido;
	const itens = req.body.items;

	connection.query(
		`SELECT * FROM PEDIDO where CPF = "${req.body.cliente.cpf}" ORDER BY ID_PEDIDO DESC`,
		(err, rows) => {
			if (rows) {
				console.log();
				itens.forEach((item) => {
					connection.query(`INSERT INTO item_pedido (id_pedido, id_produto, quantidade, nome_disco, valor) values (
						${rows[0].id_pedido}, ${item.id_produto}, ${item.qtd}, "${item.nome_disco}", ${item.valor});`);
				});
			}
		}
	);

	res.status(200).send("Itens adicionados");
});

app.get("/pedido/criado", (req, res) => {
	connection.query(
		`SELECT * FROM PEDIDO where CPF = "${req.body.cliente.cpf}" ORDER BY ID_PEDIDO DESC`
	);
});
// essa sempre tem que ficar ABAIXO de tudo gurizada
app.listen(port, (req, res) => {
	console.log(`Server listening to port ${port}, FRONT OFFICE`);
});
