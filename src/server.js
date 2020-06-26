const express = require("express")
const server = express()

//configuração pasta publica
server.use(express.static("public"))


//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



//Página Inicial
server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/tela-cadastro", (req, res) => {
   return res.render("tela-cadastro.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
 })


//Ligar servidor
server.listen(3000)


