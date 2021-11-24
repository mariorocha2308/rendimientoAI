//llamamos a las librerias a ocupar
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//traemos las rutas
const user = require('./router/user')

//llamamos a la base de datos para la coneccion
const {sequelize} = require('./database/db') 

//para usar json desde body
app.use(express.json())
// reconoce objetos de solicitud entrante como cadenas o matrices
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:'*',//se establesera una sola ruta de pagina cuando se deploye
    methods:['GET','POST','PUT','DELETE'] // solo aceptara estas peticiones 
}))
app.use(morgan('dev'))//status de peticion 

//damos la rutas a seguir
app.use('/api/users', user)

app.listen('3008',()=>{
    console.log('I am listen in port: http://localhost:3008')
    //vemos si se conecta correctamente 
    sequelize.authenticate()
    .then(()=>console.log('entraste a la base de datos'))
    .catch(e=>console.log('error en la base de datos'))
    sequelize.sync({force:false})
})