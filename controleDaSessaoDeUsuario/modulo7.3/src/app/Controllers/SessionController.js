module.exports = {
  loginForm(req,res){
    return res.render("session/login")
  },
  login(req,res){
    // verificar se o usuário ta cadastrado
    // Verificar se o password bate
    // colocar o usuário no req.session
    req.session.userId = req.user.id

    return res.redirect("/users")

  },
  logout(req,res) {
    req.session.destroy()
    return res.redirect("/")
  },
  forgotForm(req,res){
    return res.render("session/forgot-password")
  },
  forgot(req,res){
    // criar um token
    // criar uma expiração

    // enviar um email com o link de recuperação 

    // avisar a usuário que enviamos o email 
  }
}