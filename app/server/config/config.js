// Instatiate environment variables
require("dotenv").config();

let CONFIG = {}; //Make this global to use all over the application


CONFIG.NODE_ENV = process.env.NODE_ENV || "development";
CONFIG.PORT = process.env.PORT || "3000";

// ----- DATABASE -----
CONFIG.DB_DIALECT = process.env.DB_DIALECT || "mysql";
CONFIG.DB_HOST = process.env.DB_HOST || "mysql";
CONFIG.DB_PORT = process.env.DB_PORT || "3306";
CONFIG.DB_NAME = process.env.DB_NAME || "gestorPadel";
CONFIG.DB_USERNAME = process.env.DB_USERNAME || "root";
CONFIG.DB_PASSWORD = process.env.DB_PASSWORD || "root";

if (process.env.LOG) {
  CONFIG.LOG = process.env.LOG == "false" ? false : true;
} else {
  CONFIG.LOG = true;
}
module.exports = CONFIG;