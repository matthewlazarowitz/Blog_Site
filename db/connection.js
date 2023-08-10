const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  // Your local database configuration
  sequelize = new Sequelize("blog_db", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
  });
}

module.exports = sequelize;
