// ECMAScript 6
/*
class UserController {
  registerForm(req, res){
    return res.redirect("/products")

  }

}

module.exports = new UserController()
*/

module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
  }
}

