function onlyUsers(req,res,next){
  if (!req.session.userId)
    return res.redirect('/users/login')

  next()
}
function isLoggedRedirectToUsers(req, res, next){
  if (req.session.userId)
    return res.redirect('/Users')

  next()
}

module.exports = {
  onlyUsers,
  isLoggedRedirectToUsers
}