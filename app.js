///require('dotenv').config()//archivo para no enviar al repo
const express = require('express') 
const app = express()


app.get('/', (req, res) => {
    console.log("Petición recibida")

    res.status(200).send('<h1>Hola mundo!</h1>')
})
///app.use(express.static(path.join(__dirname, 'public'

app.listen(4000, (req, res) => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

const PORT = process.env.PORT || 4000


/*const { default: mongoose, mongo } = require('mongoose')*/
///const path = require('path')
///const { default: mongoose, mongo } = require('mongoose')

/*mongoose.connect(
    `mongodb+srv://sddsergio:${process.env.MONGO_DB_PASS}@cluster0.3sxfzkb.mongodb.net/gabba-app?retryWrites=true&w=majority`
)
/*.then((result) => {
    app.listen(PORT, () => {
        console.log(`Servidor escuando en el puerto ${PORT}`)
    })
        console.log('Conexion exitosa a la base BBDD')
    })
    .catch((error) => console.log(err))

///middleware


/*mongoose.connect(
    `mongodb+srv://sddsergio:${process.env.MONGO_DB_PASS}@cluster0.3sxfzkb.mongodb.net/gabba-app?retryWrites=true&w=majority`
)
.then((result) => {
    app.listen(PORT, () => {
        console.log(`Servidor escuando en el puerto ${PORT}`)
    })
        console.log('Conexion exitosa a la base BBDD')
    })
    .catch((error) => console.log(err))

/*const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        price: Number,
    },
    { timestamps: true }
)*/

/*const Product = mongoose.model('Product', productSchema)*/

/*app.use(express.json())*/
