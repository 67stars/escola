var express = require('express')
var router = express.Router()

const path = require('path')
    
const basePath = path.join(__dirname, '../templates')

app.use(
        express.urlencoded({
            extended: true,
        }),
)

app.use(express.json())

router.get('/suporte', (req, res) => {
        res.sendFile(`${basePath}/suporte.html`)
})

 router.post('/contato_suporte/save', (req, res) => {
    console.log(req.body)
    const nome = req.body.c-nome
    const email = req.body.c-email
    const tipo = req.body.c-tipo
    const seguranca = req.body.c-seg
    const mensagem = req.body.c-msg


    console.log(nome)
    console.log(email)
    console.log(tipo)
    console.log(seguranca)
    console.log(mensagem)

    res.send('Contato cadastrado com sucesso!')
})

module.exports = router

