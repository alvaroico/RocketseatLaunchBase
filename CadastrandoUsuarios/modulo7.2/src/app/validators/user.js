const User = require('../models/User')


async function post (req,res,next){
   // checar se os fields estão preenchidos
   const keys = Object.keys(req.body);

    
  

   for (key of keys) {
     if (req.body[key] == "") {
       return res.render('user/register', {
        user: req.body,
        error: 'Por favor preencha todos os dados'
      })
     }
   }

   // verificar se o email e cpf existem

   let { email, cpf_cnpj, password, passwordRepeat } = req.body

   cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

   const user = await User.findOne({ 
     where: {email},
     or: {cpf_cnpj}
   })
  

   if (user) return res.render('user/register', {
     user: req.body,
     error: 'Usuário já cadastrado.'
   })

   // verificar se a senha bate

   if(password != passwordRepeat)
     return res.render('user/register', {
      user: req.body,
      error: 'Password nao idêntico'
    })
   
   next()
}

module.exports = {
  post
}