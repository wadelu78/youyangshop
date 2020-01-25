const jwt = require('jsonwebtoken')

const config = require('config')

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header('x-admin-auth-token')

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtAdminSecret'))
    //decoded thing is the payload added when the token is created
    //if we print decode,
    //is shows:
    // { admin: {
    //   id: '5e2a4dd4f...'
    // },
    //   iat: 1579906864,
    //   exp: 1579910464
    // }    
    req.admin = decoded.admin
    next()
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}