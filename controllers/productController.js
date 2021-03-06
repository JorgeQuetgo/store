const Product = require('../models/Product')

async function addProduct(req, res) {
  try {
    const {
      name,
      size,
      unitPrice,
      description
    } = req.body

    const product = Product({
      name,
      size,
      unitPrice,
      description
    })

    if (req.file){
      const { filename } = req.file
      console.log(req.file)
      console.log(filename)
      product.setImgUrl(filename)
    }

    const productStored = await product.save()
    console.log("hola mundo")
    res.status(201).send({productStored})
  } catch (e) {
      res.status(500).send({message: e.message})
  }

}

async function getProducts (req, res){
  const products = await Product.find().lean().exec()
  res.status(200).send({products})
}


module.exports = {addProduct, getProducts}
