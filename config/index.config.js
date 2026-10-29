const { default: Sequelize } = require("@sequelize/core");
require("dotenv").config();

const seqlused = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  pasword: "0026061155",
  port: 3306,
  username: "root",
  database: "nodejs",
});

seqlused
  .authenticate()
  .then(async () => {
    await seqlused.sync({ alter: true });
    console.log(`conected to mysql`);
  })
  .catch((err) => {
    console.log(`server mysql ride ${err.message}`);
  });

module.exports = {
  seqlused,
};
