const {aplicarRelaciones} = require('./relations')
//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")
//Objeto de Conexion
const sequelize= new Sequelize('amixes_poderosos','user1','root',{
    dialect: 'mysql',
    host: '54.227.9.233', //Direccion IP
    define:{
        //No coloques createdAt y updateAt
        timestamps:false,
        //Evitar plural
        freezeTableName: true
    }
})

//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

//Adherir al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la BD
aplicarRelaciones(sequelize)

//Para poder usar en archivo externos la conexion
module.exports = sequelize;


