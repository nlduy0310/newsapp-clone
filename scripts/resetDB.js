const models = require("../models");
models.sequelize.sync({ force: true }).then(() => console.log("models synced"));
