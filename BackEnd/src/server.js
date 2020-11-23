const dataBase = require("./dataBase/db");
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
    if(req.session.loggedin) {
        return true;
    } else {
        return false;
    }
});

app.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);

    if(username && password) {
        if(dataBase.login(username,password)) {
            req.session.loggedin = true;
            req.session.username = username;
            res.send("Bem Vindo");
        } else {
            res.send("Nome de Usuario e/ou Senha incorretos!");        
        }
    } else {
        res.send("Por favor, insira Nome de Usuario e/ou Senha!");
    }
});

app.listen(3333);