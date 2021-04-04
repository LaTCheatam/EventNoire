'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
       {
        eventTitle: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        numTickets: Math.floor(Math.random() * (10 - 1) + 76),
        eventImageUrl: faker.internet.avatar(),
        eventDate: faker.date.soon(),
        eventEnd: '04/26/21 11:00 PM',
        createdAt:faker.date.recent(),
        updatedAt:faker.date.soon() 
      },
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Events', null, {});
  }
};