const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const saltRounds = 10;

// creating instances of the imports
const app = new express();
const port = 8080;
var jsonParser = bodyParser.json();

// setting up express

app.use(jsonParser);

// setting up mysql connection with express
var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "TJrs4321@",
	database: "nrp",
	port: "3306",
});

app.get("/usuarios", function (req, res) {

	connection.query(
       'SELECT * FROM usuario',
        (err, rows) => {
            if (err) throw err;

            res.send({ data: rows[0] });
        }
    );
});


app.post("/login", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    connection.query(
        "SELECT * FROM conta WHERE email = ?",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                if (result.length > 0) {
                    bcrypt.compare(senha, result[0].senha, (err, response) => {
                        if (response) {
                            res.send(response);
                        } else {
                            res.send({
                                message: "Usuário ou senha errados",
                            });
                        }
                    });
                } else {
                    res.send({
                        message: "Usuário inexistente, cadastre-se!",
                    });
                }
            }
        }
    );
});

app.post("/cadastro", (req, res)=>{

const nome = req.body.nome;
const cpf = req.body.cpf;
const email = req.body.email;
const senha = req.body.senha;
const status = req.body.status;
const grupo = req.body.grupo;

connection.query(
	`INSERT INTO usuario (nome, cpf, email, senha, status_cliente , grupo) values ('${nome}','${cpf}' , '${email}', '${senha}', '${status}', '${grupo}')`,

	(err, result) => {

		if(err){
			throw err
		}

		if(result){
			res.send("conta criada com sucesso!")
		}
	}
)

	
});


app.get("/pesquisa-usr", (req, res)=>{

	const email = req.body.email;

	connection.query(
		`SELECT * FROM usuario where email = "${email}"`,
	
		(err, result) => {
	
			if(err){
				throw err
			}
	
			if(result && result.length > 0){
				res.send(result)
			}
			else{
				res.status(404).send("Email não encontrado");
			}
		}
	)
});

app.put("/alterar-grupo", (req, res)=>{

	const email = req.body.email;
	const grupo = req.body.grupo;
		
		connection.query(
		`UPDATE usuario SET GRUPO = "${grupo}" WHERE email = "${email}"`,
		(err, result) => {
			if (err) {
				throw err;
			}

			if (result.affectedRows > 0) {
				// Se a atualização for bem-sucedida, envie uma resposta de sucesso
				res.send("Grupo atualizado com sucesso");
			} else {
				// Se nenhum registro for afetado, pode significar que o email não foi encontrado
				res.status(404).send("Email não encontrado ou nenhum dado atualizado");
			}
		}
	);
});



app.put("/alterar-nome", (req, res)=>{

	const email = req.body.email;
	const nome = req.body.nome;
		
		connection.query(
        `UPDATE usuario SET nome = "${nome}" WHERE email = "${email}"`,
        (err, result) => {
            if (err) {
                throw err;
            }

            if (result.affectedRows > 0) {
                res.send("nome atualizado com sucesso");
            } else {
                res.status(404).send("Email não encontrado ou nenhum dado atualizado");
            }
        }
    );
	});

	app.put("/alterar-cpf", (req, res)=>{

		const email = req.body.email;
		const cpf = req.body.cpf;
			
			connection.query(
			`UPDATE usuario SET CPF = "${cpf}" WHERE email = "${email}"`,
			(err, result) => {
				if (err) {
					throw err;
				}
	
				if (result.affectedRows > 0) {
					res.send("CPF atualizado com sucesso");
				} else {
					res.status(404).send("Email não encontrado ou nenhum dado atualizado");
				}
			}
		);
		});

		app.put("/alterar-senha", (req, res)=>{

			const email = req.body.email;
			const senha = req.body.senha;
				
				connection.query(
				`UPDATE usuario SET SENHA = "${senha}" WHERE email = "${email}"`,
				(err, result) => {
					if (err) {
						throw err;
					}
		
					if (result.affectedRows > 0) {
						// Se a atualização for bem-sucedida, envie uma resposta de sucesso
						res.send("Senha atualizada com sucesso");
					} else {
						// Se nenhum registro for afetado, pode significar que o email não foi encontrado
						res.status(404).send("Email não encontrado ou nenhum dado atualizado");
					}
				}
			);
			});


			app.put("/alterar-status", (req, res)=>{

				const email = req.body.email;
				const status = req.body.status;
					
					connection.query(
					`UPDATE usuario SET STATUS_CLIENTE = "${status}" WHERE email = "${email}"`,
					(err, result) => {
						if (err) {
							throw err;
						}
			
						if (result.affectedRows > 0) {
							// Se a atualização for bem-sucedida, envie uma resposta de sucesso
							res.send("Status atualizado com sucesso");
						} else {
							// Se nenhum registro for afetado, pode significar que o email não foi encontrado
							res.status(404).send("Email não encontrado ou nenhum dado atualizado");
						}
					}
				);
			});



			app.put("/alterar-status", (req, res)=>{

				const email = req.body.email;
				const status = req.body.status;
					
					connection.query(
					`UPDATE usuario SET STATUS_CLIENTE = "${status}" WHERE email = "${email}"`,
					(err, result) => {
						if (err) {
							throw err;
						}
			
						if (result.affectedRows > 0) {
							// Se a atualização for bem-sucedida, envie uma resposta de sucesso
							res.send("Status atualizado com sucesso");
						} else {
							// Se nenhum registro for afetado, pode significar que o email não foi encontrado
							res.status(404).send("Email não encontrado ou nenhum dado atualizado");
						}
					}
				);
			});



app.listen(port, (req, res) => {
console.log(`Server listening to port ${port}, BACK OFFICE`);
});



