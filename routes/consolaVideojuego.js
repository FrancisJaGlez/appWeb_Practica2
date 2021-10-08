const express = require('express')

//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/consolaVideojuegos')

//Servicio para procesar los datos del formulario  

// Crear una consolaVideojuego CREATE
router.post('/agregarConsolaVideojuego',vjController.postAgregarConsolaVideojuego)
//Consulta de consolaVideojuego READ
router.get('/obtenerConsolaVideojuego',vjController.getObtenerConsolaVideojuego )
//Eliminar consolaVideojuego DELETE
router.post('/borrarConsolaVideojuego',vjController.postBorrarConsolaVideojuego)
//Actualizar consolaVideojuego UPDATE
router.post('/actualizarConsolaVideojuego',vjController.postActualizarConsolaVideojuego)

module.exports = router