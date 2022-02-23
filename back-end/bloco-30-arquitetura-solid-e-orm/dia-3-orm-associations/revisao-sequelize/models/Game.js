const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  publisherId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

module.exports = (sequelize) => {
  const Game = sequelize.define(
    'Game',
    Attributes,
    {
      timestamps: false,
      underscored: true,
      tableName: 'games'
    }
  );

  Game.associate = (models) => {
    Game.belongsTo(models.Publisher, {
      foreignKey: 'publisher_id',
      as: 'publisher'
    });
  };

  return Game;
}