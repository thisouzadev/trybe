module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publishers', [
      {
        name: 'Activision Blizzard',
        country: 'USA'
      },
      {
        name: 'EA',
        country: 'USA'
      },
      {
        name: 'RIOT',
        country: 'China'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publishers', null, {})
  }
};
