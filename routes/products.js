const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Product = require('../models/Product')
// @route      GET api/products
// @desc       Get all users products
// @access     Private
router.get('/', (req, res) => {
  res.send('Get all products')
})

// @route       POST api/products
// @desc        Post an product into the mongoDB
// @access      For now, it is public, at last, only the admin user can do that

router.post('/', [
  check('product_id', 'A product id is required').not().isEmpty(),
  check('name_chn', 'A product name in Chinese is required').not().isEmpty(),
  check('category', 'The category of the product is required').not().isEmpty(),
  check('subcategory', 'The subcategory of the product is required').not().isEmpty(),
  check('mainImageAddress', 'The main image of the product is required').not().isEmpty(),
  check('price', 'The price of the product in Chinese Yuan is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const { product_id, name_eng, name_chn, category, subcategory, description, mainImageAddress, price } = req.body


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
      subcategory,
      description,
      mainImageAddress,
      price
    })
    await product.save()
    res.send(product + ' has been added to the database')
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router