import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
const saltRounds = 10;

// creating instances of the imports
const app = new express();
const port = 8081;
var jsonParser = bodyParser.json();

// setting up express

app.use(jsonParser);

// setting up mysql connection with express
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "TJrs4321@",
  database: "projeto_pw",
  port: "5002",
});

//Rota para pegar um cliente
app.post("/cliente", (req, res) => {
  const email = req.body.email;
  connection.query(
    `SELECT * FROM cliente WHERE email = "${email}"`,

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

// Rota para Login do cliente
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
            message: "Cliente inexistente",
          });
        }
      }
    }
  );
});

app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}, BACK OFFICE`);
});
