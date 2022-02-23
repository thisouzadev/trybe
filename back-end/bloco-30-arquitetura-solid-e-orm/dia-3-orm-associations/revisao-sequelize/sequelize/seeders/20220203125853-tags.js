module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tags', [
      {
        name: 'First Person Shooter'
      },
      {
        name: 'Multiplayer'
      },
      {
        name: 'MOBA'
      },
      {
        name: 'MMORPG'
      },
      {
        name: 'Sports'
      },
      {
        name: 'Soccer'
      },
      {
        name: 'Adventure'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {})
  }
};