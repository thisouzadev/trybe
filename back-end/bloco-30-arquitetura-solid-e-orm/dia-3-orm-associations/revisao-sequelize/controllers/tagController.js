const express = require('express');

const router = express.Router();

const { Tag, Game } = require('../models');

router.post(
  '/',
  async (req, res) => {
    const { name } = req.body;

    const newTag = await Tag.create({ name });

    return res.status(201).json(newTag);
  }
);

router.get(
  '/',
  async (_req, res) => {
    const tagList = await Tag.findAll({
      include: [
        {
          model: Game,
          as: 'games',
          through: { attributes: [] }
        }
      ]
    });

    return res.status(200).json(tagList)
  }
)

module.exports = router;