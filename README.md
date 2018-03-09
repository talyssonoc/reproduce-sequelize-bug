# Repo to reproduce hanging Sequelize connection

Steps to reproduce:

- Install dependencies with `yarn` or `npm i`
- Run `cp config/config.json.example config/config.json`
- Fill the new file with your database credentials (run `npm run sequelize db:create` if necessary)
- Run the tests with `DEBUG=* npm test`
- Notice that the process won't die but Sequelize debug log says that the connection was released
- Uncomment line 7 of `test/test.js`
- Run `DEBUG=* npm test` again
- Notice that now the process dies