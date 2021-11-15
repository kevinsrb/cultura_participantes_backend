"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _postulaciones = require("../controllers/postulaciones.controller");

var router = (0, _express.Router)();
//  /api/personaNatural/ RUTA PRINCIPAL
router.post('/', _postulaciones.crearPostulacion);
router.post("/documentos_administrativos/:id", _postulaciones.guardarDocumentosAdministrativosConvocatorias);
router.post("/documentos_tecnicos/:id", _postulaciones.guardarDocumentosTecnicosConvocatorias);
router.post("/documentos_generales/:id", _postulaciones.guardarDocumentosGeneralesConvocatorias);
router.put('/guardarLinksPostulacion/:id_postulacion', _postulaciones.guardarLinksPostulacion);
router.put('/actualizarNombrePropuesta/', _postulaciones.actualizarNombrePropuesta);
router.put('/cambiarTipoParticipantePostulacion', _postulaciones.cambiarTipoParticipantePostulacion);
router.put('/cambiarEstadoPostulacion', _postulaciones.cambiarEstadoPostulacion);
router.put('/guardarUrlDocumentosPostulacion', _postulaciones.guardarUrlDocumentosPostulacion);
router.post('/documentos/:id_postulacion', _postulaciones.guardarDocumentosParticipantes);
router.get("/consultarDocumentosAdministrativos/:id", _postulaciones.consultarDocumentosAdministrativos);
router.get("/consultarDocumentosTecnicos/:id", _postulaciones.consultarDocumentosTecnicos);
router.get("/consultarDocumentosGenerales/:id", _postulaciones.consultarDocumentosGenerales);
router.get('/', _postulaciones.consultarPostulaciones);
var _default = router;
exports["default"] = _default;