const express = require('express')

const router = express.Router()

// @route      GET api/products
// @desc       Get all users products
// @access     Private
router.get('/', (req, res) => {
  res.send('Get all products')
})

//and the other route

module.exports = router