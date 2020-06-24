const express = require("express")
const server = express()

//configuração pasta publica
server.use(express.static("public"))



//Página Inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/tela-cadastro", (req, res) => {
    res.sendFile(__dirname + "/views/tela-cadastro.html")
})


//Ligar servidor
server.listen(3000)


