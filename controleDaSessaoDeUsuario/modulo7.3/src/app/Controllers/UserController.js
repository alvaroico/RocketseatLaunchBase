// ECMAScript 6
/*
class UserController {
  registerForm(req, res){
    return res.redirect("/products")

  }

}

module.exports = new UserController()
*/

const User = require("../models/User")
const { formatCep, formatCpfCnpj } = require('../../lib/utils')

module.exports = {
  registerForm(req, res) {
    
    return res.render("user/register")
  },
  async show(req, res){
    
    const {user} = req

    user.cpf_cnpj = formatCpfCnpj(user.cpf_cnpj)
    user.cep = formatCep(user.cep)

    return res.render('user/index', { user })
  },
  async post(req, res) {

    const userId = await User.create(req.body)
    
    req.session.userId = userId
      
    return res.redirect('/users')


  },
  update(req, res){
    // verificar todos os campos
    // verificar se preencheu a senha
    // password match 
  }
}

