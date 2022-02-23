module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tags', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('tags')
  }
};
