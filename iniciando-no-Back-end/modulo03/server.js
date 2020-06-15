const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/59286021?v=4",
        name: "Alvaro Ribeiro Pereira",
        role: "Estudante - Rocketseat",
        description: 'Programador Full-stack orem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, ',
        links: [
            { name: "GitHub", url: "https://github.com/alvaroico"},
            { name: "Twitter", url: "https://twitter.com/alvaroico"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/alvaroico/"}
        ]
    }



return res.render("about", { about: about})

})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", { items: videos})
    
    })

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video){
        return res.send("Video not found!")
    }
    return res.render("video", { item: video })
})

server.listen(5000, function(){
    console.log ("Server is Running")

})