const { Model, DataTypes } = require("@sequelize/core");
const { seqlused } = require("../../config/index.config");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  {
    sequelize: seqlused,
    modelName: "user",
  },
);

async function main() {
  await User.sync({ force: true });
  const user = await User.create({
    username: "mahdizare",
    birthday: new Date("2007-02-02"),
  });
  console.log(user.dataValues);
}
main();
