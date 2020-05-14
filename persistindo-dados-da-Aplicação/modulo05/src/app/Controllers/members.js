const { age, date } = require("../lib/utils")

module.exports = {
index(req, res){
            //console.log(data)
            return res.render("members/index")
},
show(req, res){
    return
},
create(req, res){
    return res.render('members/create')

},
post(req, res){
 //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

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
    const id = Number(data.members.length + 1)

    

    data.members.push({
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

        return res.redirect("/members")

    })

   // return res.send(req.body)
},
delete(req, res){
    return
},

}