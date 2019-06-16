import { Router } from 'express'

const router = Router()

const Color = require('../../models').colors
const Color_scheme = require('../../models').color_schemes
const Color_color_scheme = require('../../models').color_color_schemes


router.get('/colors', async (req, res, next) => {
  let colors = await Color.findAll({
    include: [
      {
        model: Color_color_scheme
      }
    ]
  })
  res.json(colors)
})

router.get('/color_scheme', async (req, res, next) => {
  let color_scheme = await Color_scheme.findAll({
    include: [
      {
        model: Color_color_scheme
      }
    ]
  })
  res.json(color_scheme)
})

router.get('/color_color_scheme', async (req, res, next) => {
  let color_color_scheme = await Color_color_scheme.findAll({
    include: [
      {
        model: Color
      },
      {
        model: Color_scheme
      }
    ]
  })
  res.json(color_color_scheme)
})

router.get('/colors/:iColorID', async (req, res, next) => {
  let color = await Color.findByPk(req.params.iColorID)
  res.json(color)
})


export default router
