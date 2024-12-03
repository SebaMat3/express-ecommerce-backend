const faker = require('faker');

class UserService {
  constructor(){
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
      });
    };
  };
  find() {
    return this.users;
  }
  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;
  };
  delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error("product not found");
    }
    this.users.splice(index, 1);
    return {id};
  }
}

module.exports = UserService;
