const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

const { Game, Tag, sequelize } = require('../models');

router.post(
  '/',
  async (req, res) => {
    const { title, releaseYear, publisherId, tags } = req.body;

    const existingTags = await Tag.findAll({ attributes: ['id'] });
    
    const existingTagsIds = existingTags.map(({ id }) => id)

    const tagsAreValid = tags.every((tag) => existingTagsIds.includes(tag))

    if (!tagsAreValid) return res.status(400).json({ message: 'Invalid Tags' });

    const result = await sequelize.transaction(async (t) => {
      const newGame = await Game.create({ title, releaseYear, publisherId }, { transaction: t });

      await newGame.addTags(tags, { transaction: t });

      return newGame
    })

    return res.status(201).json(result);
  }
)

module.exports = router;