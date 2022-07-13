require('dotenv').config()
const express = require('express')
const { default: mongoose, mongo } = require('mongoose')
const path = require('path')

const app = express()


///middleware
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(
        `mongodb+srv://sddsergio:${process.env.MONGO_DB_PASS}@cluster0.3sxfzkb.mongodb.net/gabba-app?retryWrites=true&w=majority`
    )
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Servidor escuando en el puerto ${PORT}`)
        })
            console.log('Conexion exitosa a la base BBDD')
        })
        .catch((error) => console.log(err))

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        price: Number,
    },
    { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

app.use(express.json())

app.post('/api/v1/products', (req, res) => {
    const newProduct = new Product( req.body )

    newProduct
    .save()
    .then((result) => {
        res.status(201).json({ ok: true })
    })
    .catch((err) => console.log(err))
})
///    res.status(200)
///    .sendFile('index.html', { root : __dirname })


const PORT = process.env.PORT || 4000