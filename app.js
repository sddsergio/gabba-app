require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("Petición recibida")

    res.status(200).send('Hola mundo!!!')
})

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`Servidor escuando en el puerto ${PORT}`)
})
