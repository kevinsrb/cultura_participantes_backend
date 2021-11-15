"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _participantes = require("../controllers/participantes.controllers");

var router = (0, _express.Router)();
//  /api/personaNatural/ RUTA PRINCIPAL
router.post('/', _participantes.crearParticipante);
router.post('/guardarArchivo', _participantes.guardarArchivo);
router.post('/guardarPostulacionParticipantes/:idParticipante', _participantes.guardarPostulacionParticipantes);
router.put('/:usuario_id', _participantes.editarParticipante);
router["delete"]('/eliminarArchivo/:filename', _participantes.eliminarArchivo);
router.put('/actualizarEstadoSubsanacionDocumento/:idParticipante', _participantes.actualizarEstadoSubsanacionDocumento);
router.get('/:idParticipante', _participantes.obtenerParticipante);
router.get('/obtenerIdParticipante', _participantes.obtenerIdParticipante);
router.get('/consultarArchivos/:idParticipante', _participantes.consultarArchivos);
router.get('/consultarLinks/:idParticipante', _participantes.consultarLinks);
router.get('/obtenerPostulacionParticipante/:idParticipante', _participantes.obtenerPostulacionParticipante);
router.get('/', _participantes.consultarParticipantes);
var _default = router;
exports["default"] = _default;