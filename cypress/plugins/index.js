const cucumber = require('cypress-cucumber-preprocessor').default
// const postgreSQL = require('cypress-postgresql')
// const pg = require('pg')
const dbConfig = require('../../cypress.json')


module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

}