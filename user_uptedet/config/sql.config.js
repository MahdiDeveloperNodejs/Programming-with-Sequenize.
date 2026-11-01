const { default: Sequelize } = require("@sequelize/core");
const { MySqlDialect } = require("@sequelize/mysql");

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD || "0026061155",
  database: "nodejs",
});

async function codes() {
  try {
    await sequelize.authenticate();
    console.log("server run SQL conected.");
  } catch (error) {
    console.log(`content yores ride${error.message}`);
  }
}
codes();

module.exports = {
  sequelize,
};
