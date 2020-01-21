const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  product_id: {
    //0101001
    //AABBCCC
    //AA category
    //BB subcategory
    //CCC product
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
  subcategory: {
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
  date: {
    type: Date,
    default: Date.now
  },
})

//a mongoose model called 'user', it is a class
module.exports = mongoose.model('product', ProductSchema)