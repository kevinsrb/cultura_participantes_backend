"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _participantesAgregados = require("../controllers/participantesAgregados.controller");

var router = (0, _express.Router)();
//  /api/personaNatural/ RUTA PRINCIPAL
router.post('/', _participantesAgregados.crearParticipantes);
router["delete"]('/:id', _participantesAgregados.eliminarParticipante);
router.get('/participante/:id', _participantesAgregados.obtenerParticipantesByIdParticipante);
router.get('/:id', _participantesAgregados.consultarParctipanteAgregado);
router.get('/consultarParctipantesUsuario/:idParticipante', _participantesAgregados.consultarParctipantesAgregados);
var _default = router;
exports["default"] = _default;