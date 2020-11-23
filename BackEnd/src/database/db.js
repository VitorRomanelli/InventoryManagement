const Sequelize = require("sequelize");
const sequelize = new Sequelize("inventorymanagement", "root", "1117", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((err) => {
    console.log("Falha na conexão" + err);
});