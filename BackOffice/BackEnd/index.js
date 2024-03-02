import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
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
	password: "",
	database: "projeto_pw",
	port: "5002",
});

app.listen(port, (req, res) => {
	console.log(`Server listening to port ${port}, BACK OFFICE`);
});
