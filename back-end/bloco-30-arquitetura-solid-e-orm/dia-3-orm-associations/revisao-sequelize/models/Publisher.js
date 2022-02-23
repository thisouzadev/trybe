const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

module.exports = (sequelize) => {
  const Publisher = sequelize.define(
    'Publisher',
    Attributes,
    {
      timestamps: false,
      underscored: true,
      tableName: 'publishers'
    }
  );

  Publisher.associate = (models) => {
    Publisher.hasMany(models.Game, {
      foreignKey: 'publisher_id',
      as: 'games'
    });
  };

  return Publisher
}