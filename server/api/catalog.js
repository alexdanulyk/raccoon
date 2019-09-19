import { Router } from 'express'
import { request } from 'http';

const router = Router()

// const Sequelize = require('sequelize')

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

  // if () {

  // }

  request.bouquets = await Bouquet.getBouquetCatalog(req.query)

  // res.json(request.bouquets)
  // return

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

  // res.json(request.bouquets)
  // return false

  // request.bouquets.docs = docs
  // request.bouquets.pages = pages
  // request.bouquets.total = total

  request.selected = {
    flowers: (req.query.flowers) ? req.query.flowers : [],
    color_schemes: (req.query.color_schemes) ? req.query.color_schemes : [],
    colors: (req.query.colors) ? req.query.colors : [],
    sizes: (req.query.sizes) ? req.query.sizes : [],
    costs: (req.query.costs) ? req.query.costs : null,
    page: (req.query.page) ? req.query.page : null,
  }

  request.url = queryString.stringify(req.query, {arrayFormat: 'bracket'})

  request.bouquets = await Bouquet.getBouquetCatalog(req.query)

  res.json(request)
})

router.get('/loadNewPageCatalog', async (req, res, next) => {
  let request = {}

  console.log(req.query)
  // req.query.page = 2

  request.bouquets = await Bouquet.getBouquetCatalog(req.query)

  request.url = queryString.stringify(req.query, {arrayFormat: 'bracket'})

  res.json(request)
})

export default router
