const { age, date } = require("../../lib/utils")

mudule.exports = {
    index(req, res) {
         //console.log(data)
        return res.render("members/index")
    
    },
    create(req, res) {
        return res.render('members/create')

    },
    post(req, res) 
    {
         //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    return

    },
    show(req, res) {
     return

    },
    edit(req, res) {
        return
    },
    put(req, res) {
        
         //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    return
    
    },
    delete(req, res) {
        return
    },
}
