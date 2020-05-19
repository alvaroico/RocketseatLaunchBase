const { age, date } = require("../lib/utils")
const Instructor = require('../models/Instructor')

module.exports = {
index(req, res){
    Instructor.all(function(instructors){
        return res.render("instructors/index",{ instructors})
    })
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
    return
},
put(req, res){
   //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    let {avatar_url, name, birth, gender, services} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    

    data.instructors.push({
        id,
        name, 
        avatar_url, 
        birth, 
        gender, 
        services, 
        created_at, 
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if (err) return res.send("Erro ao gravar arquivo")

        return res.redirect("/instructors")

    })

   // return res.send(req.body)
},
delete(req, res){
    return
},

}