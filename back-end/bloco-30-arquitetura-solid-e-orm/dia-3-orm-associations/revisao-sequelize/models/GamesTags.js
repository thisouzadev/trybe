module.exports = (sequelize) => {
  const GameTag = sequelize.define(
    'GameTag',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'games_tags'
    }
  );

  GameTag.associate = (models) => {
    models.Game.belongsToMany(models.Tag, {
      as: 'tags',
      through: GameTag,
      foreignKey: 'game_id',
      otherKey: 'tag_id'
    });

    models.Tag.belongsToMany(models.Game, {
      as: 'games',
      through: GameTag,
      foreignKey: 'tag_id',
      otherKey: 'game_id'
    });
  }

  return GameTag;
}