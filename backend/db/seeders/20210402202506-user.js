'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Users', [
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        email: faker.internet.email (),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
       
    ], {});
  },
    
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', {});
  }
};
