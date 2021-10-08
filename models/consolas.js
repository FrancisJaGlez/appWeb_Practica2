const Sequelize = require("sequelize")

const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:Sequelize.STRING
    })
}

module.exports = Consola