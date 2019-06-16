import { Router } from 'express'

const router = Router()

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Flower = require('../../models').flowers
const Color_scheme = require('../../models').color_schemes
const Color = require('../../models').colors
const Color_color_scheme = require('../../models').color_color_schemes
const Size = require('../../models').sizes
const Cost = require('../../models').costs
const Bouquet = require('../../models').bouquets
const Bouquet_size = require('../../models').bouquet_sizes
const Bouquet_flower = require('../../models').bouquet_flowers

router.get('/catalog', async (req, res, next) => {
  let require = {}

  require.filters = {}
  require.filters.flowers = await Flower.findAll({
    order: [
      ['sFlowerTitle', 'ASC']
    ]
  })  
  require.filters.color_schemes = await Color_scheme.findAll({
    order: [
      ['sColorSchemeTitle', 'ASC']
    ]
  })
  require.filters.colors = await Color.findAll({
    order: [
      ['sColorTitle', 'ASC']
    ]
  })
  require.filters.sizes = await Size.findAll({
    order: [
      ['iSizeID', 'ASC']
    ]
  })
  require.filters.costs = await Cost.findAll({
    raw: true,
    order: [
      ['iCostFrom', 'ASC']
    ]
  })

  let where_flowers = null
  if (req.query.flowers) {
    where_flowers = {
      iFlowerID: req.query.flowers
    }
  }

  let where_color_schemes = null
  if (req.query.color_schemes) {
    where_color_schemes = {
      iColorSchemeID: req.query.color_schemes
    }
  }

  let where_colors = null
  if (req.query.colors) {
    where_colors = {
      iColorID: req.query.colors
    }
  }

  let where_bouquet_size = []
  if (req.query.sizes) {
    where_bouquet_size.push({
      iSizeID: req.query.sizes
    })
  }
  if (req.query.costs) {
    let cost = require.filters.costs.filter(cost => cost.iCostID == req.query.costs)
    // if (cost[0].iCostFrom && cost[0].iCostTo) {
    //   console.log('cost')
    //   where_costs_between = {
    //     iCost: {
    //       [Op.between]: [cost[0].iCostFrom, cost[0].iCostTo]
    //     }
    //   }
    // }
    if (cost[0].iCostFrom) {
      where_bouquet_size.push({
        iCost: {
          [Op.gte]: cost[0].iCostFrom
        }
      })
    }
    if (cost[0].iCostTo) {
      where_bouquet_size.push({
        iCost: {
          [Op.lte]: cost[0].iCostTo
        }
      })
    }
  }

  require.bouquets = await Bouquet.findAll({
    include: [
      {
        model: Bouquet_size,
        where: where_bouquet_size,
        // where: where_sizes,
        // where: where_sizes,
        // where: where_costs_from,
        // where: where_costs_to,
        required: true,
        include: [
          {
            model: Size,
          },
          {
            model: Bouquet_flower,
            where: where_flowers,
            required: true,
            include: [
              {
                model: Flower
              },
              {
                model: Color,
                where: where_colors,
                required: true,
                include: [
                  {
                    model: Color_color_scheme,
                    where: where_color_schemes,
                    required: true
                  }
                ]
              }
            ]
          },
        ],
      }
    ],
    order: [
      [Bouquet_size, 'iCost', 'ASC']
    ],
  })

  // res.json([require.filters.costs, require.bouquets])
  res.json(require)
})

export default router
