const { Sequelize } = require("sequelize");
const {
  DB_DIALECT,
  DB_PASSWORD,
  DB_LOGIN,
  DB_HOST,
  DB_NAME,
} = require("../config/config");
const createUserModel = require("./userModel");

const sequelize = new Sequelize(DB_NAME, DB_LOGIN, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const Users = createUserModel(sequelize);

const checkConnect = async () => {
  try {
    await sequelize.authenticate();

    // sequelize.sync({ force: true }).then(() => {
    // 	console.log('Drop and re-sync db.');
    // });

    console.log("-----------------------------------------------------");
    console.log("Connected successfully.");
    console.log("-----------------------------------------------------");
  } catch (error) {
    console.log("#######################################################");
    console.error("Unable to connect to the database:", error);
    console.log("#######################################################");
  }
};

module.exports = {
  checkConnect,
  Users,
};
