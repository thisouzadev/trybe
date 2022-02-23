module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('games', [
      {
        title: 'Call of Duty Warzone',
        release_year: 2020,
        publisher_id: 1
      },
      {
        title: 'FIFA 2021',
        release_year: 2021,
        publisher_id: 2
      },
      {
        title: 'League of Legends',
        release_year: 2009,
        publisher_id: 3
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('games', null, {})
  }
};