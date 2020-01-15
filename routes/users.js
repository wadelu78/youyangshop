const express = require('express')

const router = express.Router()
const { check, validationResult } = require('express-validator')

//User is a class
const User = require('../models/User')





// @route      POST api/users
// @desc       Register a user
// @access     Public
router.post('/',
  [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    res.send(req.body)
  })

module.exports = router