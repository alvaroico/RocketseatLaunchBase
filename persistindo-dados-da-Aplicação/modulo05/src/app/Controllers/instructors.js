const { age, date } = require("../lib/utils")
const Instructor = require('../models/Instructor')

module.exports = {
index(req, res){
    
    let { filter, page, limit } = req.query
    
    page = page || 1
    limit = limit || 2
    let offset = limit * (page - 1)

    const params = {
        filter,
        page,
        limit,
        offset,
        callback(instructors) {
            const pagination = {
                total: Math.ceil(instructors[0].total / limit),
                page
            }
            return res.render("instructors/index",{ instructors, paginate, filter})
        }
    }

    Instructor.paginate(params)

},
show(req, res){
    Instructor.find(req.params.id, function(instructor){
        if (!instructor) return res.send("Instructor não encontrado!")

        instructor.age = age(instructor.birth)
        instructor.services = instructor.services.split(",")

        instructor.created_at = date(instructor.created_at).format

        return res.render("instructors/show", { instructor})
    })
},
create(req, res){
    return res.render('instructors/create')

},
post(req, res){
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }
    Instructor.create(req.body, function(instructor){
        return res.redirect(`/instructors/${instructor.id}`)
    })
    

},
edit(req, res){
    Instructor.find(req.params.id, function(instructor){
        if (!instructor) return res.send("Instructor não encontrado!")

        instructor.birth = date(instructor.birth).iso
      
        return res.render("instructors/edit", { instructor})
    })
},
put(req, res){
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    Instructor.update(req.body, function(){
        return res.redirect(`/instructors/${req.body.id}`)
    })
    
},
delete(req, res){
    Instructor.delete(req.body.id, function(){
        return res.redirect(`/instructors`)
    })
},

}