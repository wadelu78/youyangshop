const express = require('express')

const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
//User is a class
const User = require('../models/User')





// @route      POST api/users
// @desc       Register a user
// @access     Public
router.post('/',
  [
    //user name is an email
    check('username', 'Please include a valid email as your username').isEmail(),
    check('password', 'please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    //After validation
    //Get the username and the password from the body of the request
    const { username, password } = req.body

    //make sure the username(an unique email) is unique
    try {
      let user = await User.findOne({ username })
      if (user) {
        return res.status(400).json({
          msg: 'User already exists'
        })
      }

      //hash the password before save into the database
      const salt = await bcrypt.genSalt()
      const hashPassword = await bcrypt.hash(password, salt)

      //generate the user with the hashed password and save it into the database
      user = new User({
        username,
        password: hashPassword
      })
      console.log("user.id before save is: " + user.id)
      await user.save()

      //jwt part
      //based on the user id, create a token and send to the client
      console.log("user.id is: " + user.id)
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