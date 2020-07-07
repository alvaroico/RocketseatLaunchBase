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
  async post(req, res) {
    // checar se os fields estão preenchidos
    const keys = Object.keys(req.body);

    
  

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por favor preencha todos os dados");
      }
    }

    // verificar se o email e cpf existem

    let { email, cpf_cnpj, password, passwordRepeat } = req.body

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

    const user = await User.findOne({ 
      where: {email},
      or: {cpf_cnpj}
    })
   

    if (user) return res.send('Usuário ja existe')

    // verificar se a senha bate

    if(password != passwordRepeat)
      return res.send('Password nao idêntico')
    

      
    return res.send('Passou!')


  }
}

