require("dotenv").config();
const debug = require("debug")("vacunas");
const chalk = require("chalk");
const express = require("express");
const initializeServer = require("./server/initializeServer");

const app = express();
const port = process.env.PORT || 4000;

(async () => {
  try {
    await initializeServer(port, app);
  } catch (error) {
    debug(chalk.red(`Error: ${error.message}`));
  }
})();
