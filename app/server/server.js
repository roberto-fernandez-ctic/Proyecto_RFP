const express = require("express");
const models = require('./models');
const app = express();
const routes = require('./routes/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/", routes);

// Load & Log configuration
const CONFIG = require('./config/config');
console.log('===========================');
console.log('       CONFIGURATION');
console.log('===========================');
console.log('  - NODE_ENV: ', CONFIG.NODE_ENV);
console.log('  - PORT: ', CONFIG.PORT);
console.log('  - DB_DIALECT: ', CONFIG.DB_DIALECT);
console.log('  - DB_HOST: ', CONFIG.DB_HOST);
console.log('  - DB_PORT: ', CONFIG.DB_PORT);
console.log('  - DB_NAME: ', CONFIG.DB_NAME);
console.log('===========================\n');

// Connect to Database.
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL database: ', CONFIG.DB_NAME);
  })
  .catch(err => {
    console.log('ERROR: ', err);
    console.error('\nUnable to connect to SQL database!: ', CONFIG.DB_NAME);
  });

  // Sync Database
if (CONFIG.NODE_ENV === 'development') {
    // Deletes all tables then recreates them (useful for testing and development purposes)
    // Use sync() without { force: true } to create tables only if they do not already exist
      //Use { alter: true } for update tables
    models.sequelize
      .sync({force:true})   /* Forces always the redo of the database */
      .then(() => {
        console.log('\n=================================');
        console.log('         LOADING FIXTURES');
        console.log('=================================');
        const sequelize_fixtures = require('sequelize-fixtures');
        sequelize_fixtures
          .loadFile('./fixtures/*.json', models)
          .then(() => {
            console.log('\n==== FIXTURES SUCCESSFULLY LOADED! ====\n');
          })
          .catch(err => {
            console.log('ERROR: ', err);
            console.log('\nSomething went wrong loading fixtures!');
          });
      })
      .catch(err => {
        console.log('ERROR: ', err);
        console.log('\nSomething went wrong with the Database Update!');
      });
  }

  app.listen(CONFIG.PORT, () => {
    console.log(`Server started on port ${CONFIG.PORT}`);
  });

  module.exports = app;
