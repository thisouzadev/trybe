const express = require('express');

const router = express.Router();

const { Publisher, Game } = require('../models');

router.post(
  '/',
  async (req, res) => {
    const { name, country } = req.body;

    const newPub = await Publisher.create({ name, country });

    return res.status(201).json(newPub);
  }
);

router.get(
  '/',
  async (req, res) => {
    const { games } = req.query;

    let publisherList;

    if (games) {
      publisherList = await Publisher.findAll({
        include: [
          {
            model: Game,
            as: 'games'
          }
        ]
      });
    } else {
      publisherList = await Publisher.findAll();
    }

    return res.status(200).json(publisherList);
  }
);

router.get(
  '/:id',
  async (req, res) => {
    const { id } = req.params;
    const { games } = req.query;

    let publisherInfo;

    if (games) {
      publisherInfo = await Publisher.findByPk(id, {
        include: [
          {
            model: Game,
            as: 'games'
          }
        ]
      });
    } else {
      publisherInfo = await Publisher.findByPk(id);
    }

    return res.status(200).json(publisherInfo);
  }
)

module.exports = router;