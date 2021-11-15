"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizarNombrePropuesta = actualizarNombrePropuesta;
exports.cambiarEstadoPostulacion = cambiarEstadoPostulacion;
exports.cambiarTipoParticipantePostulacion = cambiarTipoParticipantePostulacion;
exports.consultarDocumentosAdministrativos = consultarDocumentosAdministrativos;
exports.consultarDocumentosGenerales = consultarDocumentosGenerales;
exports.consultarDocumentosTecnicos = consultarDocumentosTecnicos;
exports.consultarPostulaciones = consultarPostulaciones;
exports.crearPostulacion = crearPostulacion;
exports.guardarDocumentosAdministrativosConvocatorias = guardarDocumentosAdministrativosConvocatorias;
exports.guardarDocumentosGeneralesConvocatorias = guardarDocumentosGeneralesConvocatorias;
exports.guardarDocumentosParticipantes = guardarDocumentosParticipantes;
exports.guardarDocumentosTecnicosConvocatorias = guardarDocumentosTecnicosConvocatorias;
exports.guardarLinksPostulacion = guardarLinksPostulacion;
exports.guardarUrlDocumentosPostulacion = guardarUrlDocumentosPostulacion;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Postulaciones = _interopRequireDefault(require("../models/Postulaciones"));

var _database = require("../database/database");

var _expressValidator = require("express-validator");

var _moment = _interopRequireDefault(require("moment"));

var _Participantes = _interopRequireDefault(require("../models/Participantes"));

function crearPostulacion(_x, _x2) {
  return _crearPostulacion.apply(this, arguments);
}

function _crearPostulacion() {
  _crearPostulacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var fecha_creacion, _req$body, convocatoria_id, nombre_convocatoria, categoria_linea_convocatoria, fecha_apertura, estado, errores;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fecha_creacion = (0, _moment["default"])().format("YYYY-MM-DD");
            _req$body = req.body, convocatoria_id = _req$body.convocatoria_id, nombre_convocatoria = _req$body.nombre_convocatoria, categoria_linea_convocatoria = _req$body.categoria_linea_convocatoria, fecha_apertura = _req$body.fecha_apertura, estado = _req$body.estado;
            errores = (0, _expressValidator.validationResult)(req);

            if (errores.isEmpty()) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              mensaje: errores.array()
            }));

          case 5:
            _database.sequelizeconfig.authenticate().then(function (data) {
              _Postulaciones["default"].create({
                convocatoria_id: convocatoria_id,
                nombre_convocatoria: nombre_convocatoria,
                categoria_linea_convocatoria: categoria_linea_convocatoria,
                fecha_apertura: fecha_apertura,
                estado: estado
              }).then(function (data) {
                res.json({
                  mensaje: "Se ha creado la postulaion correctamente",
                  data: data
                });
              })["catch"](function (error) {
                console.log(error);
                res.status(400).json({
                  mensaje: "Proceso no se completo",
                  data: {}
                });
              });
            })["catch"](function (error) {
              console.log("error en la conexion", error);
              res.status(400).json({
                mensaje: "Problemas en la conexion a la base de datos",
                data: {}
              });
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _crearPostulacion.apply(this, arguments);
}

function consultarPostulaciones(_x3, _x4) {
  return _consultarPostulaciones.apply(this, arguments);
}

function _consultarPostulaciones() {
  _consultarPostulaciones = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var postulaciones, i, numeroDocumento, participante;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Postulaciones["default"].findAll();

          case 3:
            postulaciones = _context2.sent;
            i = 0;
            _context2.t0 = _regenerator["default"].keys(postulaciones);

          case 6:
            if ((_context2.t1 = _context2.t0()).done) {
              _context2.next = 18;
              break;
            }

            i = _context2.t1.value;

            if (!(postulaciones[i].numero_documento_participante !== null)) {
              _context2.next = 16;
              break;
            }

            numeroDocumento = postulaciones[i].numero_documento_participante.toString();
            _context2.next = 12;
            return _Participantes["default"].findOne({
              where: {
                numero_documento: numeroDocumento
              }
            });

          case 12:
            participante = _context2.sent;

            if (participante) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 15:
            postulaciones[i].participante = participante;

          case 16:
            _context2.next = 6;
            break;

          case 18:
            res.json({
              postulaciones: postulaciones
            });
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t2 = _context2["catch"](0);
            console.log("error en la peticion", _context2.t2);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 21]]);
  }));
  return _consultarPostulaciones.apply(this, arguments);
}

function cambiarEstadoPostulacion(_x5, _x6) {
  return _cambiarEstadoPostulacion.apply(this, arguments);
}

function _cambiarEstadoPostulacion() {
  _cambiarEstadoPostulacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, id_postulacion, estado, existe, postulacion;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // const { id_postulacion } = req.params;
            _req$body2 = req.body, id_postulacion = _req$body2.id_postulacion, estado = _req$body2.estado;
            _context3.prev = 1;
            _context3.next = 4;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 4:
            existe = _context3.sent;

            if (existe) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              mensaje: "Postulacion no existe",
              data: {}
            }));

          case 7:
            _context3.next = 9;
            return _Postulaciones["default"].update({
              estado: estado
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 9:
            postulacion = _context3.sent;
            res.json({
              data: postulacion,
              mensaje: "Se han actualizado el estado de la postulacion "
            });
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](1);
            console.log("error en la peticion", _context3.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 13]]);
  }));
  return _cambiarEstadoPostulacion.apply(this, arguments);
}

function guardarDocumentosParticipantes(_x7, _x8) {
  return _guardarDocumentosParticipantes.apply(this, arguments);
}

function _guardarDocumentosParticipantes() {
  _guardarDocumentosParticipantes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id_postulacion, documentos, existe, postulaciones;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_postulacion = req.params.id_postulacion;
            documentos = req.body;
            _context4.prev = 2;
            _context4.next = 5;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 5:
            existe = _context4.sent;

            if (existe) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              mensaje: "Postulacion no existe",
              data: {}
            }));

          case 8:
            _context4.next = 10;
            return _Postulaciones["default"].update({
              documentos: documentos
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 10:
            postulaciones = _context4.sent;
            res.json({
              data: postulaciones,
              mensaje: "Se han asociado correctamente los documentos al participante "
            });
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](2);
            console.log("error en la peticion", _context4.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 14]]);
  }));
  return _guardarDocumentosParticipantes.apply(this, arguments);
}

function cambiarTipoParticipantePostulacion(_x9, _x10) {
  return _cambiarTipoParticipantePostulacion.apply(this, arguments);
}

function _cambiarTipoParticipantePostulacion() {
  _cambiarTipoParticipantePostulacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, id_postulacion, tipo_participante, existe, postulacion;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // const { id_postulacion } = req.params;
            _req$body3 = req.body, id_postulacion = _req$body3.id_postulacion, tipo_participante = _req$body3.tipo_participante;
            console.log(id_postulacion);
            _context5.prev = 2;
            _context5.next = 5;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 5:
            existe = _context5.sent;

            if (existe) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              mensaje: "Postulacion no existe",
              data: {}
            }));

          case 8:
            _context5.next = 10;
            return _Postulaciones["default"].update({
              tipo_participante: tipo_participante
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 10:
            postulacion = _context5.sent;
            res.json({
              data: postulacion,
              mensaje: "Se han actualizado el estado de la postulacion "
            });
            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](2);
            console.log("error en la peticion", _context5.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 14]]);
  }));
  return _cambiarTipoParticipantePostulacion.apply(this, arguments);
}

function guardarLinksPostulacion(_x11, _x12) {
  return _guardarLinksPostulacion.apply(this, arguments);
}

function _guardarLinksPostulacion() {
  _guardarLinksPostulacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id_postulacion, links, existe, postulaciones;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_postulacion = req.params.id_postulacion;
            links = req.body;
            _context6.prev = 2;
            _context6.next = 5;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 5:
            existe = _context6.sent;

            if (existe) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 8:
            _context6.next = 10;
            return _Postulaciones["default"].update({
              links: links
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 10:
            postulaciones = _context6.sent;
            res.json({
              data: postulaciones,
              mensaje: "Se han asociado correctamente los linsk al participante "
            });
            _context6.next = 18;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](2);
            console.log("error en la peticion", _context6.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 14]]);
  }));
  return _guardarLinksPostulacion.apply(this, arguments);
}

function actualizarNombrePropuesta(_x13, _x14) {
  return _actualizarNombrePropuesta.apply(this, arguments);
}

function _actualizarNombrePropuesta() {
  _actualizarNombrePropuesta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body4, id_postulacion, nombrePropuesta, existe, postulacion;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // const { id_postulacion } = req.params;
            _req$body4 = req.body, id_postulacion = _req$body4.id_postulacion, nombrePropuesta = _req$body4.nombrePropuesta;
            _context7.prev = 1;
            _context7.next = 4;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 4:
            existe = _context7.sent;

            if (existe) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              mensaje: "Postulacion no existe",
              data: {}
            }));

          case 7:
            _context7.next = 9;
            return _Postulaciones["default"].update({
              nombre_propuesta: nombrePropuesta
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 9:
            postulacion = _context7.sent;
            res.json({
              data: postulacion,
              mensaje: "Se han actualizado el estado de la postulacion "
            });
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](1);
            console.log("error en la peticion", _context7.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 13]]);
  }));
  return _actualizarNombrePropuesta.apply(this, arguments);
}

function guardarUrlDocumentosPostulacion(_x15, _x16) {
  return _guardarUrlDocumentosPostulacion.apply(this, arguments);
} //Documentos


function _guardarUrlDocumentosPostulacion() {
  _guardarUrlDocumentosPostulacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body5, id_postulacion, id_documento, filename, postulacionExiste, documentoExiste;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            // const { id_postulacion } = req.params;
            _req$body5 = req.body, id_postulacion = _req$body5.id_postulacion, id_documento = _req$body5.id_documento, filename = _req$body5.filename;
            _context8.prev = 1;
            _context8.next = 4;
            return _Postulaciones["default"].findOne({
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 4:
            postulacionExiste = _context8.sent;

            if (postulacionExiste) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", res.status(400).json({
              mensaje: "Postulacion no existe",
              data: {}
            }));

          case 7:
            if (!(postulacionExiste.dataValues.documentos !== null && postulacionExiste.dataValues.documentos !== undefined)) {
              _context8.next = 17;
              break;
            }

            documentoExiste = postulacionExiste.dataValues.documentos.filter(function (doc) {
              return doc.id === id_documento;
            });

            if (!documentoExiste) {
              _context8.next = 16;
              break;
            }

            documentoExiste[0].url_participante = filename;
            _context8.next = 13;
            return _Postulaciones["default"].update({
              documentos: postulacionExiste.dataValues.documentos
            }, {
              where: {
                id_postulacion: id_postulacion
              }
            });

          case 13:
            return _context8.abrupt("return", res.json({
              mensaje: "Se actualizo correctamete el estado del documento",
              data: documentoExiste
            }));

          case 16:
            return _context8.abrupt("return", res.json({
              mensaje: "El documento no exite",
              data: {}
            }));

          case 17:
            _context8.next = 23;
            break;

          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](1);
            console.log("error en la peticion", _context8.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 23:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 19]]);
  }));
  return _guardarUrlDocumentosPostulacion.apply(this, arguments);
}

function consultarDocumentosTecnicos(_x17, _x18) {
  return _consultarDocumentosTecnicos.apply(this, arguments);
}

function _consultarDocumentosTecnicos() {
  _consultarDocumentosTecnicos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, existe, documentos_tecnicos;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            _context9.prev = 1;
            _context9.next = 4;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 4:
            existe = _context9.sent;

            if (existe) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 7:
            _context9.next = 9;
            return Convocatoria.findOne({
              attributes: ['documentos_tecnicos'],
              where: {
                idconvocatorias: id
              }
            });

          case 9:
            documentos_tecnicos = _context9.sent;
            res.json(documentos_tecnicos);
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            console.log("error en la peticion", _context9.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));
  return _consultarDocumentosTecnicos.apply(this, arguments);
}

function guardarDocumentosTecnicosConvocatorias(_x19, _x20) {
  return _guardarDocumentosTecnicosConvocatorias.apply(this, arguments);
}

function _guardarDocumentosTecnicosConvocatorias() {
  _guardarDocumentosTecnicosConvocatorias = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, documentos_tecnicos, existe, documentos;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            documentos_tecnicos = req.body;
            _context10.prev = 2;
            _context10.next = 5;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 5:
            existe = _context10.sent;

            if (existe) {
              _context10.next = 8;
              break;
            }

            return _context10.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 8:
            _context10.next = 10;
            return Convocatoria.update({
              documentos_tecnicos: documentos_tecnicos
            }, {
              where: {
                idconvocatorias: id
              }
            });

          case 10:
            documentos = _context10.sent;
            res.json({
              data: documentos,
              mensaje: "Se han asociado correctamente los documentos tecnicos a la convocatoria"
            });
            _context10.next = 18;
            break;

          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](2);
            console.log("error en la peticion", _context10.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 14]]);
  }));
  return _guardarDocumentosTecnicosConvocatorias.apply(this, arguments);
}

function consultarDocumentosGenerales(_x21, _x22) {
  return _consultarDocumentosGenerales.apply(this, arguments);
}

function _consultarDocumentosGenerales() {
  _consultarDocumentosGenerales = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var id, existe, documentos_generales;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id;
            _context11.prev = 1;
            _context11.next = 4;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 4:
            existe = _context11.sent;

            if (existe) {
              _context11.next = 7;
              break;
            }

            return _context11.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 7:
            _context11.next = 9;
            return Convocatoria.findOne({
              attributes: ['documentos_generales'],
              where: {
                idconvocatorias: id
              }
            });

          case 9:
            documentos_generales = _context11.sent;
            res.json(documentos_generales);
            _context11.next = 17;
            break;

          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](1);
            console.log("error en la peticion", _context11.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 13]]);
  }));
  return _consultarDocumentosGenerales.apply(this, arguments);
}

function guardarDocumentosGeneralesConvocatorias(_x23, _x24) {
  return _guardarDocumentosGeneralesConvocatorias.apply(this, arguments);
}

function _guardarDocumentosGeneralesConvocatorias() {
  _guardarDocumentosGeneralesConvocatorias = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var id, documentos_generales, existe, documentos;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id = req.params.id;
            documentos_generales = req.body;
            _context12.prev = 2;
            _context12.next = 5;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 5:
            existe = _context12.sent;

            if (existe) {
              _context12.next = 8;
              break;
            }

            return _context12.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 8:
            _context12.next = 10;
            return Convocatoria.update({
              documentos_generales: documentos_generales
            }, {
              where: {
                idconvocatorias: id
              }
            });

          case 10:
            documentos = _context12.sent;
            res.json({
              data: documentos,
              mensaje: "Se han asociado correctamente los documentos generales a la convocatoria"
            });
            _context12.next = 18;
            break;

          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12["catch"](2);
            console.log("error en la peticion", _context12.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 14]]);
  }));
  return _guardarDocumentosGeneralesConvocatorias.apply(this, arguments);
}

function consultarDocumentosAdministrativos(_x25, _x26) {
  return _consultarDocumentosAdministrativos.apply(this, arguments);
}

function _consultarDocumentosAdministrativos() {
  _consultarDocumentosAdministrativos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var id, existe, documentos_administrativos;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id = req.params.id;
            _context13.prev = 1;
            _context13.next = 4;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 4:
            existe = _context13.sent;

            if (existe) {
              _context13.next = 7;
              break;
            }

            return _context13.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 7:
            _context13.next = 9;
            return Convocatoria.findOne({
              attributes: ['documentos_administrativos'],
              where: {
                idconvocatorias: id
              }
            });

          case 9:
            documentos_administrativos = _context13.sent;
            res.json(documentos_administrativos);
            _context13.next = 17;
            break;

          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](1);
            console.log("error en la peticion", _context13.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 13]]);
  }));
  return _consultarDocumentosAdministrativos.apply(this, arguments);
}

function guardarDocumentosAdministrativosConvocatorias(_x27, _x28) {
  return _guardarDocumentosAdministrativosConvocatorias.apply(this, arguments);
}

function _guardarDocumentosAdministrativosConvocatorias() {
  _guardarDocumentosAdministrativosConvocatorias = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var id, documentos_administrativos, existe, documentos;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            id = req.params.id;
            documentos_administrativos = req.body;
            console.log('dsf');
            _context14.prev = 3;
            _context14.next = 6;
            return Convocatoria.findOne({
              where: {
                idconvocatorias: id
              }
            });

          case 6:
            existe = _context14.sent;

            if (existe) {
              _context14.next = 9;
              break;
            }

            return _context14.abrupt("return", res.status(400).json({
              mensaje: "Convocatoria no existe",
              data: {}
            }));

          case 9:
            _context14.next = 11;
            return Convocatoria.update({
              documentos_administrativos: documentos_administrativos
            }, {
              where: {
                idconvocatorias: id
              }
            });

          case 11:
            documentos = _context14.sent;
            res.json({
              data: documentos,
              mensaje: "Se han asociado correctamente los documentos administrativos a la convocatoria"
            });
            _context14.next = 19;
            break;

          case 15:
            _context14.prev = 15;
            _context14.t0 = _context14["catch"](3);
            console.log("error en la peticion", _context14.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 19:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[3, 15]]);
  }));
  return _guardarDocumentosAdministrativosConvocatorias.apply(this, arguments);
}