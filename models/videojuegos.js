const Sequelize = require("sequelize")

const Videojuego = (sequelize)=>{
    sequelize.define('videojuego',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        anio:{
            type:Sequelize.INTEGER,
            allowNull:true
        }
    })
}

module.exports = Videojuego