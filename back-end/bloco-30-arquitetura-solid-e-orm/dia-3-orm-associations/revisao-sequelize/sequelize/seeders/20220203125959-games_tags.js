module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('games_tags', [
      {
        game_id: 1,
        tag_id: 1
      },
      {
        game_id: 1,
        tag_id: 2
      },
      {
        game_id: 2,
        tag_id: 2
      },
      {
        game_id: 2,
        tag_id: 5
      },
      {
        game_id: 2,
        tag_id: 6
      },
      {
        game_id: 3,
        tag_id: 2
      },
      {
        game_id: 3,
        tag_id: 3
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('games_tags', null, {})
  }
};