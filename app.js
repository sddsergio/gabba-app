///require('dotenv').config()//archivo para no enviar al repo
/*const { default: mongoose, mongo } = require('mongoose')*/
const express = require('express') 
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res, next) => {
    console.log("Petición recibida")

    next()
})


const PORT = process.env.PORT || 4000

console.log(`Servidor escuchando en el puerto ${PORT}`)
app.listen(4000, (req, res) => {
})

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
