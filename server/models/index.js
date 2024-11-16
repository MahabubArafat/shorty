const { sequelize } = require("../db/dbConfig");
const urlRepo = require("./url");

const url = urlRepo(sequelize);

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized. Tables created if not exist.");
  } catch (error) {
    console.error("Error during table creation:", error);
  }
})();

module.exports = { url };
