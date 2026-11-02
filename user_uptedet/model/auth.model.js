const { default: Sequelize, DataTypes } = require("@sequelize/core");
const { sequelize } = require("../config/sql.config");

class User extends Sequelize {}

const Model = sequelize.define(
  "UserModel",
  {
    name: { type: DataTypes.STRING, required: true },
    fullName: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    menber: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: "true",
    freezeTableName: false,
  },
);

async function MongoDB() {
  await Model.sync({ force: true });
}

MongoDB();
