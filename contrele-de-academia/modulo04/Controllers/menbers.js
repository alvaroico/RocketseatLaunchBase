const fs = require ("fs")
const data = require("../data.json")
const { date } = require("../utils")


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
        birth: date(foundMember.birth).birthDay
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

    birth = Date.parse(req.body.birth)

    let id = 1
    const lestMember = data.members[data.members.length - 1]

    if(lestMember){
        id = lestMember.id + 1
    }

    data.members.push({
        ...req.body,
        id,
        birth 
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
        birth: date(foundMember.birth).iso
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