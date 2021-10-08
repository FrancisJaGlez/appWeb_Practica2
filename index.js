const express = require("express")
const path = require("path")

const vjRoutes = require('./routes/videojuegos')
const vjRoutesC = require('./routes/consola')
const vjRoutesCV = require('./routes/consolaVideojuego')

const sequelize = require('./utils/database')
//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/practica2", (req, res)=>{
  console.log("En linea")
  res.send("Aqui tamos")
})

app.use("/videojuegos",vjRoutes);
app.use("/consolas",vjRoutesC);
app.use("/consolaVideojuego",vjRoutesCV);

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })        
    })
    .catch(err=>console.log(err))