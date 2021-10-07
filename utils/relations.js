function aplicarRelaciones(sequelize){
    //Imprimir los modelos adheridos al objeto de conexión
   console.log(sequelize.models)
   const Videojuego = sequelize.models.videojuego
   const Consola = sequelize.models.consola
   const ConsolaVideojuego = sequelize.models.consolaVideojuego
   //Un videojuego puede jugarse en una o muchas consolas
   Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego}) //Crear una tabla intermedia
   //Genera la llave foranea dentro de la tabla intermedia
   //Una consola tiene uno o muchos videojuegos
   Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego}) //Crear una tabla intermedia
   //Genera la llave foranea dentro de la tabla intermedia

   //Si tuvieras una relación uno a muchos
   /*Supuesto tener una table trofeo
   un video puede tener muchos trofeos pero un
    trofeo solo pertenece a un videojuego

    Videojuego.hasMany(Trofeo) //uno a muchos
    Trofeo.belongsToMany(Videojuego) //muchos a uno
    */
}

module.exports = {aplicarRelaciones}