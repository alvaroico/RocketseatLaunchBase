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

  }
}