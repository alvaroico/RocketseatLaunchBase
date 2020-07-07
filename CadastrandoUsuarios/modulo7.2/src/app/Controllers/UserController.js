// ECMAScript 6
/*
class UserController {
  registerForm(req, res){
    return res.redirect("/products")

  }

}

module.exports = new UserController()
*/

const User = require('../models/User')
module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
  },
  post(req, res) {
    // checar se os fields estão preenchidos
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor preencha todos os dados");
      }
    }

    // verificar se o email e cpf existem

    const { email, cpf_cnpj } = req.body
    const user = await User.findOne({ 
      where: {email},
      or: {cpf_cnpj}
    })

    // verificar se a senha bate
  }
}

