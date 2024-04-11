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
	connection.query(
		"SELECT * FROM cliente WHERE email = ?",
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
app.post("/cliente/cadastrar", (req, res) => {
	const nome_completo = req.body.nome_completo;
	const cpf = req.body.cpf;
	const email = req.body.email;
	const senha = req.body.senha;
	const grupo = req.body.grupo;
	const data_nascimento = req.body.data_nascimento;
	const genero = req.body.genero;

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

app.get("/clientes", (req, res) => {
	connection.query(`SELECT * FROM CLIENTE`, (err, rows) => {
		if (err) throw err;

		res.send({ cliente: rows });
	});
});

app.listen(port, (req, res) => {
	console.log(`Server listening to port ${port}, BACK OFFICE`);
});

app.get("/cliente/:cpf", (req, res) => {
	const cpf = req.params.cpf;
	connection.query(`SELECT * FROM CLIENTE WHERE CPF = ${cpf}`, (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
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
