import { Router } from 'express'
import { request } from 'http';

const router = Router()

const Sequelize = require('sequelize')
const Op = Sequelize.Op

const queryString = require('query-string')

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
  let request = {}

  request.filters = {}
  request.filters.flowers = await Flower.findAll({
    order: [
      ['sFlowerTitle', 'ASC']
    ]
  })  
  request.filters.color_schemes = await Color_scheme.findAll({
    order: [
      ['sColorSchemeTitle', 'ASC']
    ]
  })
  request.filters.colors = await Color.findAll({
    order: [
      ['sColorTitle', 'ASC']
    ]
  })
  request.filters.sizes = await Size.findAll({
    order: [
      ['iSizeID', 'ASC']
    ]
  })
  request.filters.costs = await Cost.findAll({
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
    let cost = request.filters.costs.filter(cost => cost.iCostID == req.query.costs)
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

  request.bouquets = await Bouquet.findAll({
    include: [
      {
        model: Bouquet_size,
        where: where_bouquet_size,
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

  request.selected = {
    flowers: (req.query.flowers) ? req.query.flowers : [],
    color_schemes: (req.query.color_schemes) ? req.query.color_schemes : [],
    colors: (req.query.colors) ? req.query.colors : [],
    sizes: (req.query.sizes) ? req.query.sizes : [],
    costs: (req.query.costs) ? req.query.costs : null,
  }

  request.url = queryString.stringify(req.query, {arrayFormat: 'bracket'})

  res.json(request)
})

export default router
