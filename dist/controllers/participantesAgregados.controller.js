"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consultarParctipanteAgregado = consultarParctipanteAgregado;
exports.consultarParctipantesAgregados = consultarParctipantesAgregados;
exports.crearParticipantes = crearParticipantes;
exports.eliminarParticipante = eliminarParticipante;
exports.obtenerParticipantesByIdParticipante = obtenerParticipantesByIdParticipante;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ParticipantesAgregados = _interopRequireDefault(require("../models/ParticipantesAgregados"));

var _database = require("../database/database");

var _expressValidator = require("express-validator");

var _moment = _interopRequireDefault(require("moment"));

function crearParticipantes(_x, _x2) {
  return _crearParticipantes.apply(this, arguments);
}

function _crearParticipantes() {
  _crearParticipantes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var fecha_creacion, _req$body, mayor_edad, tipo_identificacion, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, rango_edad, rol, grupo_etnico, orientacion_sexual, identidad, participante_id, errores;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fecha_creacion = (0, _moment["default"])().format("YYYY-MM-DD");
            _req$body = req.body, mayor_edad = _req$body.mayor_edad, tipo_identificacion = _req$body.tipo_identificacion, numero_documento = _req$body.numero_documento, primer_nombre = _req$body.primer_nombre, segundo_nombre = _req$body.segundo_nombre, primer_apellido = _req$body.primer_apellido, segundo_apellido = _req$body.segundo_apellido, rango_edad = _req$body.rango_edad, rol = _req$body.rol, grupo_etnico = _req$body.grupo_etnico, orientacion_sexual = _req$body.orientacion_sexual, identidad = _req$body.identidad, participante_id = _req$body.participante_id;
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
              _ParticipantesAgregados["default"].create({
                mayor_edad: mayor_edad,
                tipo_identificacion: tipo_identificacion,
                numero_documento: numero_documento,
                primer_nombre: primer_nombre,
                segundo_nombre: segundo_nombre,
                primer_apellido: primer_apellido,
                segundo_apellido: segundo_apellido,
                rango_edad: rango_edad,
                rol: rol,
                grupo_etnico: grupo_etnico,
                orientacion_sexual: orientacion_sexual,
                identidad: identidad,
                participante_id: participante_id,
                fecha_creacion: fecha_creacion
              }).then(function (data) {
                res.json({
                  mensaje: "Se guardaron correctamente todos los participantes",
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
  return _crearParticipantes.apply(this, arguments);
}

function consultarParctipantesAgregados(_x3, _x4) {
  return _consultarParctipantesAgregados.apply(this, arguments);
}

function _consultarParctipantesAgregados() {
  _consultarParctipantesAgregados = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idParticipante, participantesAgregados;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idParticipante = req.params.idParticipante;
            console.log(idParticipante);
            _context2.next = 5;
            return _ParticipantesAgregados["default"].findAll({
              where: {
                participante_id: idParticipante
              }
            });

          case 5:
            participantesAgregados = _context2.sent;
            res.json({
              data: participantesAgregados
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log("error en la peticion", _context2.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _consultarParctipantesAgregados.apply(this, arguments);
}

function consultarParctipanteAgregado(_x5, _x6) {
  return _consultarParctipanteAgregado.apply(this, arguments);
}

function _consultarParctipanteAgregado() {
  _consultarParctipanteAgregado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, participanteAgregado;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _ParticipantesAgregados["default"].findOne({
              where: {
                id_participantes: id
              }
            });

          case 4:
            participanteAgregado = _context3.sent;
            res.json({
              data: participanteAgregado
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log("error en la peticion", _context3.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _consultarParctipanteAgregado.apply(this, arguments);
}

function eliminarParticipante(_x7, _x8) {
  return _eliminarParticipante.apply(this, arguments);
}

function _eliminarParticipante() {
  _eliminarParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, participante, eliminar;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _ParticipantesAgregados["default"].findOne({
              where: {
                id_participantes: id
              }
            });

          case 4:
            participante = _context4.sent;

            if (participante) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 7:
            _context4.next = 9;
            return _ParticipantesAgregados["default"].destroy({
              where: {
                id_participantes: id
              }
            });

          case 9:
            eliminar = _context4.sent;
            res.status(200).json({
              data: "Proceso completado"
            });
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            console.log("error en la peticion", _context4.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 13]]);
  }));
  return _eliminarParticipante.apply(this, arguments);
}

function obtenerParticipantesByIdParticipante(_x9, _x10) {
  return _obtenerParticipantesByIdParticipante.apply(this, arguments);
}

function _obtenerParticipantesByIdParticipante() {
  _obtenerParticipantesByIdParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, participanteAgregado;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _ParticipantesAgregados["default"].findAll({
              where: {
                participante_id: participante_id
              }
            });

          case 4:
            participanteAgregado = _context5.sent;

            if (!(participanteAgregado == null)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", res.json({
              data: []
            }));

          case 7:
            res.json({
              data: participanteAgregado
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.log("error en la peticion", _context5.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _obtenerParticipantesByIdParticipante.apply(this, arguments);
}