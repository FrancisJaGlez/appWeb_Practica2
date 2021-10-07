const Sequelize = require("sequelize")
const ConsolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        idCV:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento: Sequelize.STRING
    })
}

module.exports = ConsolaVideojuego