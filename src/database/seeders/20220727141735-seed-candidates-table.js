'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [
      {
        name: 'Teste 1',
        bio: 'Fullstack Developer',
        email: 'teste1@gmail.com',
        phone: '1111-1111',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Teste 2',
        bio: 'Fullstack Developer',
        email: 'teste2@gmail.com',
        phone: '1111-1111',
        open_to_work: false,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {})
  }
};
