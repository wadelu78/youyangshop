const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
//User is a class
const User = require('../models/User')

// @route      GET api/auth
// @desc       Get logged in user
// @access     Private
router.get('/', (req, res) => {
  res.send('Get logged in user')
})

// @route      POST api/auth
// @desc       Auth user & get token
// @access     Public
router.post('/',
  [
    //the user wants to log in, we require a email address as the username and the password
    check('username', 'Your username should be an email address').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const { username, password } = req.body

    try {
      let user = await User.findOne({ username })

      //no such a user
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      //if there is a user
      //we want to continue to check the password

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      //a valid user, send the token back

      const payload = {
        user: {
          //from the two console.log statement we can see
          //after user = new User, the user.id exists
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        //the token can be used in an hour
        expiresIn: '1h'
      }, (err, token) => {
        if (err) throw err
        res.json({ token })
      })


    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  })

module.exports = router