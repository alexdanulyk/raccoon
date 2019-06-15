import { Router } from 'express'

const router = Router()

const Flower = require('../../models').flowers

router.get('/flowers', async (req, res, next) => {
  let flowers = await Flower.findAll()
  res.json(flowers)
})

router.get('/flowers/:iFlowerID', async (req, res, next) => {
  let iFlowerID = parseInt(req.params.iFlowerID)
  let flower = await Flower.findByPk(iFlowerID)
  res.json(flower)
})


export default router
