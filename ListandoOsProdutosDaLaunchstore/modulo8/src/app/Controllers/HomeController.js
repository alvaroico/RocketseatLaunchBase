const { formatPrice } = require('../../lib/utils')

const Product = require("../models/Product");
const File = require("../models/Files");

module.exports = {
  async index(req, res) {
    let results = await Product.all()
    const products = results.rows

    if (!products) return res.send("Produto nao encontrado!")

  }

}