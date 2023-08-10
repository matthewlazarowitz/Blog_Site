const { Sequelize } = require("sequelize");

const isProduction = process.env.PORT;
let sequelize;

if (isProduction) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  sequelize = new Sequelize("blog_db", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
  });
}

module.exports = sequelize;
