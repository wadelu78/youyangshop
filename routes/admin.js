const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const Admin = require('../models/Admin')

router.post('/', [
  check('email', 'Valid admin email account is required').isEmail(),
  check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], async (req, res) => {


  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  //need: in the server.js file
  //app.use(express.json())
  //res.send(req.body)
  const { email, password } = req.body

  try {
    let admin = await Admin.findOne({ email })

    if (admin) {
      res.status(400).json({ msg: 'An admin account with the same email address already exists' })
    }

    //hash the password before save into the database
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)

    //generate the user with the hashed password and save it into the database
    admin = new Admin({
      email,
      password: hashPassword
    })
    await admin.save()

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