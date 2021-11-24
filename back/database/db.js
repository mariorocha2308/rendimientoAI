const {Sequelize} = require('sequelize')
const User = require('./models/User')
const Performance= require('./models/Performance')
const {PASSWOR_DB,DATABASE,USERNAME_DB,LOCALHOST_DB}= require('../config')

//conectamos a la base de datos 
const sequelize = new Sequelize(DATABASE, USERNAME_DB, PASSWOR_DB, {
    host: LOCALHOST_DB,
    dialect: 'mysql',
    logging:false 
});


//conectamos el modelo 
User(sequelize)
Performance(sequelize)

//sacamos los modelos para relacionarlos 
const {performance,user}=sequelize.models

//Realcion sera 1 a N porq un usuario tendra diferentes registros y registros espesificos a un solo usuario
user.hasMany(performance,{as:'registration',foreignKey:'userid'})
performance.belongsTo(user,{as:'user',foreignKey:'userid'})

module.exports = {sequelize,...sequelize.models}