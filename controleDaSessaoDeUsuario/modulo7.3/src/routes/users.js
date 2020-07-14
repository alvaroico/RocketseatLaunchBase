const express = require('express')
const routes = express.Router()
const SessionController = require('../app/Controllers/SessionController')
const UserController = require('../app/Controllers/UserController')

const UserValidator = require('../app/Validators/user')
const SessionValidator = require('../app/Validators/session')


// Login/logout
routes.get('/login',SessionController.loginForm)
routes.post('/login', SessionValidator.login, SessionController.login)
routes.post('/logout', SessionController.logout)

// reset password / forgot

//routes.get('/forgot-password', SessionController.forgotForm)
//routes.get('/password-reset', SessionController.resetForm)
//routes.post('/forgot-password', SessionController.forgot)
//routes.post('/password-reset', SessionController.reset)

// user register UserController

routes.get('/register', UserController.registerForm)
routes.post('/register', UserValidator.post, UserController.post)

routes.get('/', UserValidator.show, UserController.show)
routes.put('/',UserValidator.update, UserController.update)
//routes.delete('/', UserController.delete)



module.exports = routes


