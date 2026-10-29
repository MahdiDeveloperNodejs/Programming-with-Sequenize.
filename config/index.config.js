
const { Sequelize } = require("@sequelize/core");
const { MySqlDialect } = require("@sequelize/mysql");
require("dotenv").config();

const seqlused = new Sequelize({
  dialect: MySqlDialect,
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD || "0026061155",
  database: "nodejs",
});

async function connectDB() {
  try {
    await seqlused.authenticate();
    console.log("Connected to MySQL successfully");

    await seqlused.sync({ alter: true });
    console.log("Database models synchronized");
  } catch (err) {
    console.error("MySQL error:", err.message);
  }
}

connectDB();

module.exports = {
  seqlused,
};
