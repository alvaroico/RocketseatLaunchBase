const { age, date } = require("../lib/utils")
const db = require('../config/db')

module.exports = {
index(req, res){
            //console.log(data)
            return res.render("instructors/index" )
},
show(req, res){
    return
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

    const query = `
        INSERT INTO instructors (
            name,
            avatar_url,
            gender,
            services,
            birth,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id
    `

    const values = [
        req.body.name,
        req.body.avatar_url,
        req.body.gender,
        req.body.services,
        date(req.body.birth).iso,
        date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
        if(err) return res.send("Erro banco de dados!")

        return res.redirect(`/instructors/${results.rows[0].id}`)
        
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