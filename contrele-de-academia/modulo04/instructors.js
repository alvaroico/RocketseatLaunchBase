exports.post = function(req, res){
    //req.query
    // req.body
    const keys = Object.keys(req.body)

    for (key of keys){
        if(req.body[key] == ""){
            return res.send('Por favor preencha todos os dados')
        }
    }

    return res.send(req.body)
}