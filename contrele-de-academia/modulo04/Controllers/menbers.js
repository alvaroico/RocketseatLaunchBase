const fs = require ("fs")
const data = require("../data.json")
const { age, date } = require("../utils")


exports.index = function(req, res){
    //console.log(data)
    return res.render("members/index", { members: data.members })
    
}

exports.show = function(req, res){
    
    const { id } = req.params
    

    const foundMember = data.members.find(function(member){
      return member.id == id
        
    })

    if (!foundMember) return res.send("Member não encontrado")

    

console.log(foundMember.birth)
    const member = {
        ...foundMember,
        age: age(foundMember.birth)
    }
  
    return res.render("members/show", { member})

}

exports.create = function(reg, res){
    return res.render('Members/create')
}

exports.post = function(req, res){
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
}

exports.edit = function(req, res){

    const { id } = req.params
    

    const foundMember = data.members.find(function(member){
      return member.id == id
        
    })

    if (!foundMember) return res.send("Member não encontrado")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }



        return res.render('members/edit', { member })
}


exports.put = function(req, res) {

    const { id } = req.body
    let index = 0
    

    const foundMember = data.members.find(function(member, foundIndex){
        
        if (id == member.id){
            index = foundIndex
            return true
        }
    })

    if (!foundMember) return res.send("Member não encontrado")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`/members/${id}`)

    })

}

exports.delete = function(req, res) {
    const { id } = req.body

    const filteredIntructores = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredIntructores

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("White file error")

        return res.redirect("/members")
    })


}