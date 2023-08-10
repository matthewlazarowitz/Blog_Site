const { Sequelize } = require("sequelize");
const db = new Sequelize(
  "mysql://g1gxxnalbc13ousm:zgecpu0an28annip@ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p133kwekmjq0y7jf",
  {
    dialect: "mysql",
  }
);

db.sync({ force: true }).then(() => {
  console.log("synced!");
});
