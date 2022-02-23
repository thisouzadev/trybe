module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      release_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      publisher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'publishers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('games')
  }
};
