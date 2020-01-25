const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const adminAuth = require('../middleware/adminAuth')

const Product = require('../models/Product')
// @route      GET api/products
// @desc       Get all types of products, when the main page is opened
// @access     Public
router.get('/', async (req, res) => {
  try {
    const recommendProducts = await Product.find({ recommend: true })
    const popularProducts = await Product.find({ popular: true })
    const infantMilkPowder = await Product.find({ category: 'infant milkpowder' })
    const adultMilkPowder = await Product.find({ category: 'adult milkpowder' })
    const honey = await Product.find({ category: 'honey' })
    const health = await Product.find({ category: 'health' })

    //put all of them into one object called 'products'
    const products = {
      recommendProducts,
      popularProducts,
      infantMilkPowder,
      adultMilkPowder,
      honey,
      health
    }
    res.json(products)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// @route       POST api/products
// @desc        Post an product into the mongoDB
// @access      Private, only the admin user can do that

//use multiple middleware
router.post('/', [adminAuth, [
  check('product_id', 'A product id is required').not().isEmpty(),
  check('name_chn', 'A product name in Chinese is required').not().isEmpty(),
  check('category', 'The category of the product is required').not().isEmpty(),
  check('mainImageAddress', 'The main image of the product is required').not().isEmpty(),
  check('price', 'The price of the product in Chinese Yuan is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const { product_id, name_eng, name_chn, category, description, mainImageAddress, price, recommend, popular } = req.body


  try {
    //check if the product id exists
    let product = await Product.findOne({ product_id })
    if (product) {
      return res.status(400).json({
        msg: 'Product already exists'
      })
    }

    //save it into the database
    product = new Product({
      product_id,
      name_eng,
      name_chn,
      category,
      description,
      mainImageAddress,
      price,
      recommend,
      popular
    })
    await product.save()
    res.send(product + ' has been added to the database')
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router