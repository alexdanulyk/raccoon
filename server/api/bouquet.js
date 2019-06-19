import { Router } from 'express'

const router = Router()

const Bouquet = require('../../models').bouquets
const Bouquet_size = require('../../models').bouquet_sizes
const Bouquet_flower = require('../../models').bouquet_flowers
const Flower = require('../../models').flowers
const Color = require('../../models').colors
const Size = require('../../models').sizes



router.get('/bouquets', async (req, res, next) => {
  let request = {}

  request.bouquet = await Bouquet.findAll({
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

  res.json(request)
})

router.get('/bouquets/list', async (req, res, next) => {
  let request = {}
  request.bouquets = await Bouquet.findAll()
  res.json(request)
})

router.get('/bouquets/create', async (req, res, next) => {
  let request = {}
  request.bouquet = await Bouquet.create({
    sBouquetTitle: req.query.sBouquetTitle
  })
  res.json(request)
})

router.get('/bouquets/item/:iBouquetID', async (req, res, next) => {
  let request = {}
  request.sizes = await Size.findAll()
  request.flowers = await Flower.findAll()
  request.colors = await Color.findAll()
  request.bouquet = await Bouquet.getBouquet(req.params.iBouquetID)
  res.json(request)
})

router.post('/bouquets/update', async (req, res, next) => {
  let request = {}
  let iBouquetID = req.body.bouquet.iBouquetID

  await Bouquet.update({
    sBouquetTitle: req.body.bouquet.sBouquetTitle
  }, {
    where: {
      iBouquetID: iBouquetID
    }
  })
  
  const bouquetFlowers = async (iBouquetSizeID, bouquet_flowers) => {
    if (bouquet_flowers) {
      for (const bouquet_flower of bouquet_flowers) {
        if (bouquet_flower.iBouquetFlowerID && bouquet_flower.destroy === true) {
          await Bouquet_flower.destroy({
            where: {
              iBouquetFlowerID: bouquet_flower.iBouquetFlowerID
            }
          })
        } else if (bouquet_flower.iBouquetFlowerID) {
          await Bouquet_flower.update({
            iFlowerID: bouquet_flower.iFlowerID,
            iColorID: bouquet_flower.iColorID,
            iCount: bouquet_flower.iCount
          }, {
            where: {
              iBouquetFlowerID: bouquet_flower.iBouquetFlowerID
            }
          })
        } else if (bouquet_flower.destroy !== true) {
          await Bouquet_flower.create({
            iBouquetSizeID: iBouquetSizeID,
            iFlowerID: bouquet_flower.iFlowerID,
            iColorID: bouquet_flower.iColorID,
            iCount: bouquet_flower.iCount
          })
        }
      }
    }
  }

  const bouquetSizes = async () => {
    if (req.body.bouquet.bouquet_sizes) {
      for (const bouquet_size of req.body.bouquet.bouquet_sizes) {
        if (bouquet_size.iBouquetSizeID && bouquet_size.destroy === true) {
          await Bouquet_size.destroy({
            where: {
              iBouquetSizeID: bouquet_size.iBouquetSizeID
            }
          })
        } else if (bouquet_size.iBouquetSizeID) {
          await Bouquet_size.update({
            iSizeID: bouquet_size.iSizeID,
            iCost: bouquet_size.iCost
          }, {
            where: {
              iBouquetSizeID: bouquet_size.iBouquetSizeID
            }
          })
          await bouquetFlowers(bouquet_size.iBouquetSizeID, bouquet_size.bouquet_flowers)
        } else if (bouquet_size.destroy !== true) {
          let { dataValues: { iBouquetSizeID } } = await Bouquet_size.create({
            iBouquetID: iBouquetID,
            iSizeID: bouquet_size.iSizeID,
            iCost: bouquet_size.iCost
          })
          await bouquetFlowers(iBouquetSizeID, bouquet_size.bouquet_flowers)
        }
      }
    }
  }
  await bouquetSizes()

  request.bouquet = await Bouquet.getBouquet(iBouquetID)

  res.json(request)
})

router.get('/bouquets/destroy', async (req, res, next) => {
  let request = {}
  request.status = await Bouquet.destroy({
    where: {
      iBouquetID: req.query.iBouquetID
    }
  })
  res.json(request)
})


export default router
