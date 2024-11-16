const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize("shorty_db", "shorty_user", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Disable SQL logging in console
});

// Test the database connection
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL database.....");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit if connection fails
  }
}

module.exports = { sequelize, connectToDatabase };
