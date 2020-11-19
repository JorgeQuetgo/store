const mongoose = require('mongoose')
const { appConfig } = require('../config')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  size: Number,
  unitPrice: Number,
  imageURL: String,
  description: String,
}, {
  timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl(filename) {
  const { host, port } = appConfig
  this.imageURL = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Products', ProductSchema)

