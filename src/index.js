require("dotenv").config();
const debug = require("debug")("vacunas");
const chalk = require("chalk");
const connectDataBase = require("./database");

const connectionString = process.env.MONGO_STRING;

(async () => {
  try {
    await connectDataBase(connectionString);
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
  }
})();
