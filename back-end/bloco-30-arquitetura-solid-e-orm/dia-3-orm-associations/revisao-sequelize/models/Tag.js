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
  }
}

module.exports = (sequelize) => {
  const Tag = sequelize.define(
    'Tag',
    Attributes,
    {
      timestamps: false,
      underscored: true,
      tableName: 'tags'
    }
  );

  return Tag;
}