import { Router } from 'express'

const router = Router()

const Bouquet = require('../../models').bouquets
const Bouquet_size = require('../../models').bouquet_sizes
const Bouquet_flower = require('../../models').bouquet_flowers
const Flower = require('../../models').flowers
const Color = require('../../models').colors
const Size = require('../../models').sizes

router.get('/bouquets', async (req, res, next) => {
  let bouquet = await Bouquet.findAll({
    include: [
      {
        model: Bouquet_size,
        include: [
          {
            model: Size
          },
          {
            model: Bouquet_flower,
            include: [
              {
                model: Flower
              },
              {
                model: Color
              }
            ]
          },
        ]
      }
    ]
  })
  res.json(bouquet)
})

router.get('/bouquets/:iBouquetID', async (req, res, next) => {
  let bouquet = await Bouquet.findByPk(req.params.iBouquetID)
  res.json(bouquet)
})


export default router
