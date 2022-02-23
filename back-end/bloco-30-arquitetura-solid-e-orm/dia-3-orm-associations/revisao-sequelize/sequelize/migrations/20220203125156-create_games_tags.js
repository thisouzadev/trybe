module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('games_tags', {
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'games',
          as: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tags',
          as: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('games_tags')
  }
};

