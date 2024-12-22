//api/db/models/index.js
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  //Inits
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  //Relations
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = {setupModels};
