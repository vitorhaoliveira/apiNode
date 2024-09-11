// Config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000)
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Primeira rota
app.get('/', (req, res) => {
    res.send({ message: 'Bem-vindo ao meu servidor' })
})

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log('Conectado ao banco de dados')
    app.listen(3000)
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados: ' + err)
})
