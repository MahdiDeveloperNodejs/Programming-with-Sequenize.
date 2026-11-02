const express = require("express");
const { default: Sequelize } = require("@sequelize/core");
const { seqlused } = require("./config/index.config");

async function Main() {
  require("./model/auth.model");
  const app = express();

//   app.post("/mahdi", async (req, res) => {
//     await res.create({
//       username: "ddvdre",
//       name: "mjhi",
//       age: 22,
//       Mobile: "091958",
//     });
//   });

  app.listen(3000, () => {
    console.log(`server https://localhost${3000}`);
  });
}
