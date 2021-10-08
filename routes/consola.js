const express = require('express')

//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/consolas')

//Servicio para procesar los datos del formulario  

//Crean una consola CREATE
router.post('/agregarConsola',vjController.postAgregarConsola)
//Consulta de consolas READ
router.get('/obtenerConsolas',vjController.getObtenerConsolas)
//Eliminar consola DELETE
router.post('/borrarConsola',vjController.postBorrarConsola)
//Actualizar consola UPDATE
router.post('/actualizarConsola',vjController.postActualizarConsola)

module.exports = router