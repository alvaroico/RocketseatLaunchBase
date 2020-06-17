const Category = require('../models/Category')

module.exports = {
    create(req, res){
      //Conhecendo promises
        // Pegar categoria
        Category.all()
        .then(function(results){

          const categories = results.rows
          return res.render("products/create.njk", {categories})


        }).catch(function(err){
          console.log('Banco de dados Offline')
            throw new Error(err)
            
        })


    },
    post(req, res){
        // Logica de salvar

    }
}
