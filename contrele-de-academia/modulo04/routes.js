const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})
routes.get('/instructors', instructors.index)

routes.get('/instructors/create', function(reg, res){
    return res.render('instructors/create')
})

routes.get('/instructors/:id/edit', instructors.edit)


routes.get('/instructors/:id', instructors.show)


routes.post('/instructors', instructors.post)

// http verbs
// GET : Receber Resouce
// Post : Criar um Novo Resouce com dados enviados
// PUT : Atualizar resource
// DELET : Deletar Resource

routes.put("/instructors", instructors.put)

routes.delete("/instructores", instructors.delete)

routes.get('/members', function(req, res){
    return res.send("merembers")
})

module.exports = routes