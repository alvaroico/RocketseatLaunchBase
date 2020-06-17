const Category = require('../models/Category')

module.exports = {
    create(req, res){
        // Pegar categoria
        return res.render("products/create.njk")


    },
    post(req, res){
        // Logica de salvar

    }
}
