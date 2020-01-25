const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const authAdmin = require('../middleware/adminAuth')

const Admin = require('../models/Admin')

// @route      GET api/auth
// @desc       Get logged in user
// @access     Private
router.get('/', authAdmin, async (req, res) => {
  try {
    //('-password') means we don't want to return the password
    const admin = await Admin.findById(req.admin.id).select('-password')
    res.json(admin)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// @route      POST /api/admin-auth
// @desc       Auth admin & get token
// @access     Public
router.post('/',
  [
    //the admin wants to log in, we require a email address as the username and the password
    check('email', 'Your admin username should be an email address').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const { email, password } = req.body

    try {
      let admin = await Admin.findOne({ email })

      //no such an admin
      if (!admin) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      //if there is an admin
      //we want to continue to check the password

      const isMatch = await bcrypt.compare(password, admin.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      //a valid admin, send the token back

      const payload = {
        admin: {
          //from the two console.log statement we can see
          //after user = new User, the user.id exists
          id: admin.id
        }
      }

      jwt.sign(payload, config.get('jwtAdminSecret'), {
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