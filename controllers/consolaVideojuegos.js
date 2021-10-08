const path = require('path')
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

exports.postAgregarConsolaVideojuego = (req, res)=>{
    console.log(req.body)
    ConsolaVideojuego.create(req.body)
    .then(result=>{
        console.log("Consola creada exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })    
}


exports.getObtenerConsolaVideojuego = (req, res)=>{
    ConsolaVideojuego.findAll()
        .then(vjs=>{
            console.log(vjs)
            res.json(vjs)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}


exports.postBorrarConsolaVideojuego = (req, res)=>{
    console.log(req.body)
    ConsolaVideojuego.destroy({
        where:{
            idCV:req.body.idCV
        }
    })
    .then(()=>{
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}


exports.postActualizarConsolaVideojuego = (req, res)=>{
    console.log(req.body)
    
    ConsolaVideojuego.update({
        lanzamiento: req.body.lanzamiento
        
    },{
        where:{
            idCV:req.body.idCV
        }
    })
    .then(()=>{
        console.log("Registro actualizado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}