const { Model, DataTypes } = require("@sequelize/core");
const { seqlused } = require("../../config/index.config");

class main extends Model {}

const User = seqlused.define(
  "segade",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {

        notEmpty: true,
      },
    },
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
    },
    Mobile: DataTypes.STRING,
  },
  {
    seqlused,
    timestamps: false,
    createdAt: false,
    updatedAt: "DevLopMent",
    timestamps: true,
    freezeTableName: false,
  },
);

async function conected() {
  await User.sync({ force: true });
  const user = await User.create({
    username: "ddvdre",
    name: "mjhi",
    age:22,
    Mobile: "091958",
  });
  console.log(user.dataValues);
}
conected();
