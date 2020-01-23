const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  product_id: {
    //CCPPP
    //CC category id string, 01,02,03 -- 99
    //PPP product id string, 001,002,003,004 --- 999
    type: String,
    required: true,
    unique: true
  },
  name_eng: {
    type: String,
    default: 'no eng name'
  },
  name_chn: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'no description'
  },
  mainImageAddress: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  recommend: {
    type: Boolean,
    default: false
  },
  popular: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
})

//a mongoose model called 'user', it is a class
module.exports = mongoose.model('product', ProductSchema)