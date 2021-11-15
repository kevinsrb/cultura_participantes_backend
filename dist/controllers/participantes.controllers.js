"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizarEstadoSubsanacionDocumento = actualizarEstadoSubsanacionDocumento;
exports.consultarArchivos = consultarArchivos;
exports.consultarLinks = consultarLinks;
exports.consultarParticipantes = consultarParticipantes;
exports.crearParticipante = crearParticipante;
exports.editarParticipante = editarParticipante;
exports.eliminarArchivo = eliminarArchivo;
exports.guardarArchivo = guardarArchivo;
exports.guardarPostulacionParticipantes = guardarPostulacionParticipantes;
exports.obtenerIdParticipante = obtenerIdParticipante;
exports.obtenerParticipante = obtenerParticipante;
exports.obtenerPostulacionParticipante = obtenerPostulacionParticipante;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Participantes = _interopRequireDefault(require("../models/Participantes"));

var _database = require("../database/database");

var _expressValidator = require("express-validator");

var _moment = _interopRequireDefault(require("moment"));

function crearParticipante(_x, _x2) {
  return _crearParticipante.apply(this, arguments);
}

function _crearParticipante() {
  _crearParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var fecha_creacion, _req$body, tipo_identificacion, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, sexo, pais_nacimiento, pais_residencia, departamento, municipio, comuna, barrio, estrato, telefono_fijo, telefono_celular, correo_electronico, tipo_participante, usuario_id, errores;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fecha_creacion = (0, _moment["default"])().format("YYYY-MM-DD");
            _req$body = req.body, tipo_identificacion = _req$body.tipo_identificacion, numero_documento = _req$body.numero_documento, primer_nombre = _req$body.primer_nombre, segundo_nombre = _req$body.segundo_nombre, primer_apellido = _req$body.primer_apellido, segundo_apellido = _req$body.segundo_apellido, fecha_nacimiento = _req$body.fecha_nacimiento, sexo = _req$body.sexo, pais_nacimiento = _req$body.pais_nacimiento, pais_residencia = _req$body.pais_residencia, departamento = _req$body.departamento, municipio = _req$body.municipio, comuna = _req$body.comuna, barrio = _req$body.barrio, estrato = _req$body.estrato, telefono_fijo = _req$body.telefono_fijo, telefono_celular = _req$body.telefono_celular, correo_electronico = _req$body.correo_electronico, tipo_participante = _req$body.tipo_participante, usuario_id = _req$body.usuario_id;
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
              _Participantes["default"].create({
                tipo_identificacion: tipo_identificacion,
                numero_documento: numero_documento,
                primer_nombre: primer_nombre,
                segundo_nombre: segundo_nombre,
                primer_apellido: primer_apellido,
                segundo_apellido: segundo_apellido,
                fecha_nacimiento: fecha_nacimiento,
                sexo: sexo,
                pais_nacimiento: pais_nacimiento,
                pais_residencia: pais_residencia,
                departamento: departamento,
                municipio: municipio,
                comuna: comuna,
                barrio: barrio,
                estrato: estrato,
                telefono_fijo: telefono_fijo,
                telefono_celular: telefono_celular,
                correo_electronico: correo_electronico,
                tipo_participante: tipo_participante,
                fecha_creacion: fecha_creacion,
                usuario_id: usuario_id
              }).then(function (data) {
                /* 	#swagger.tags = ['Participante']
                    #swagger.description = 'Endpoint to save participante' */

                /*	#swagger.parameters['obj'] = {
                        in: 'body',
                        description: 'Participante information.',
                        required: true,
                        schema: { $ref: "#/definitions/Participante" }
                } */
                res.json({
                  mensaje: "Se ha creado correctamente el participante",
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
  return _crearParticipante.apply(this, arguments);
}

function consultarParticipantes(_x3, _x4) {
  return _consultarParticipantes.apply(this, arguments);
}

function _consultarParticipantes() {
  _consultarParticipantes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var participantes;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Participantes["default"].findAll();

          case 3:
            participantes = _context2.sent;
            res.json({
              participantes: participantes
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log("error en la peticion", _context2.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _consultarParticipantes.apply(this, arguments);
}

function obtenerIdParticipante(_x5, _x6) {
  return _obtenerIdParticipante.apply(this, arguments);
}

function _obtenerIdParticipante() {
  _obtenerIdParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var totalParticipantes, secuencia;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Participantes["default"].count();

          case 3:
            totalParticipantes = _context3.sent;

            if (!(totalParticipantes > 0)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 7;
            return _database.sequelizeconfig.query("SELECT * FROM participante_seq;");

          case 7:
            secuencia = _context3.sent;
            console.log(secuencia);
            return _context3.abrupt("return", res.json({
              data: parseInt(secuencia[0][0].last_value) + 1
            }));

          case 10:
            return _context3.abrupt("return", res.json({
              data: 1
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
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
    }, _callee3, null, [[0, 13]]);
  }));
  return _obtenerIdParticipante.apply(this, arguments);
}

function obtenerParticipante(_x7, _x8) {
  return _obtenerParticipante.apply(this, arguments);
}

function _obtenerParticipante() {
  _obtenerParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idParticipante, participante;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            idParticipante = req.params.idParticipante;
            _context4.next = 4;
            return _Participantes["default"].findOne({
              where: {
                usuario_id: idParticipante
              }
            });

          case 4:
            participante = _context4.sent;

            if (!(participante == null)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              data: []
            }));

          case 7:
            res.json({
              data: participante
            });
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log("error en la peticion", _context4.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _obtenerParticipante.apply(this, arguments);
}

function editarParticipante(_x9, _x10) {
  return _editarParticipante.apply(this, arguments);
}

function _editarParticipante() {
  _editarParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var usuario_id, _req$body2, tipo_identificacion, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, sexo, pais_nacimiento, pais_residencia, departamento, municipio, comuna, barrio, estrato, telefono_fijo, telefono_celular, correo_electronico, tipo_participante, datos_empresa, existe, participante;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            usuario_id = req.params.usuario_id;
            console.log(usuario_id, 'AQUIIIII');
            _req$body2 = req.body, tipo_identificacion = _req$body2.tipo_identificacion, numero_documento = _req$body2.numero_documento, primer_nombre = _req$body2.primer_nombre, segundo_nombre = _req$body2.segundo_nombre, primer_apellido = _req$body2.primer_apellido, segundo_apellido = _req$body2.segundo_apellido, fecha_nacimiento = _req$body2.fecha_nacimiento, sexo = _req$body2.sexo, pais_nacimiento = _req$body2.pais_nacimiento, pais_residencia = _req$body2.pais_residencia, departamento = _req$body2.departamento, municipio = _req$body2.municipio, comuna = _req$body2.comuna, barrio = _req$body2.barrio, estrato = _req$body2.estrato, telefono_fijo = _req$body2.telefono_fijo, telefono_celular = _req$body2.telefono_celular, correo_electronico = _req$body2.correo_electronico, tipo_participante = _req$body2.tipo_participante, datos_empresa = _req$body2.datos_empresa;
            _context5.prev = 3;
            _context5.next = 6;
            return _Participantes["default"].findOne({
              where: {
                usuario_id: usuario_id
              }
            });

          case 6:
            existe = _context5.sent;

            if (existe) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 9:
            _context5.next = 11;
            return _Participantes["default"].update({
              tipo_identificacion: tipo_identificacion,
              numero_documento: numero_documento,
              primer_nombre: primer_nombre,
              segundo_nombre: segundo_nombre,
              primer_apellido: primer_apellido,
              segundo_apellido: segundo_apellido,
              fecha_nacimiento: fecha_nacimiento,
              sexo: sexo,
              pais_nacimiento: pais_nacimiento,
              pais_residencia: pais_residencia,
              departamento: departamento,
              municipio: municipio,
              comuna: comuna,
              barrio: barrio,
              estrato: estrato,
              telefono_fijo: telefono_fijo,
              telefono_celular: telefono_celular,
              correo_electronico: correo_electronico,
              tipo_participante: tipo_participante,
              datos_empresa: datos_empresa
            }, {
              where: {
                usuario_id: usuario_id
              }
            });

          case 11:
            participante = _context5.sent;
            res.json({
              mensaje: "Se ha actualizado correctamente el participante",
              data: participante
            });
            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](3);
            console.log("error en la peticion", _context5.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 15]]);
  }));
  return _editarParticipante.apply(this, arguments);
}

function guardarArchivo(_x11, _x12) {
  return _guardarArchivo.apply(this, arguments);
}

function _guardarArchivo() {
  _guardarArchivo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var file;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(req.files);
            file = req.files.archivo;
            file.mv("./uploads/".concat(file.name), function (err, data) {
              console.log(err, data);

              if (err) {
                return res.status(400).send(err);
              }

              return res.status(200).json({
                mensaje: "Proceso completado",
                data: file.name
              });
            });

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _guardarArchivo.apply(this, arguments);
}

function consultarArchivos(_x13, _x14) {
  return _consultarArchivos.apply(this, arguments);
}

function _consultarArchivos() {
  _consultarArchivos = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var filename, fs, file;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            filename = req.params.filename;
            console.log(filename);
            fs = require("fs");
            file = fs.createReadStream("./uploads/".concat(filename));
            console.log(file);
            file.pipe(res); // let ext = filename.split(".");
            // res.json({
            //   extension: ext[1],
            // });
            // res.status(400).json({
            //   mensaje: 'Proceso no completado', data: {}
            // })

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _consultarArchivos.apply(this, arguments);
}

function eliminarArchivo(_x15, _x16) {
  return _eliminarArchivo.apply(this, arguments);
}

function _eliminarArchivo() {
  _eliminarArchivo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var fs, filename;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            fs = require('fs');
            filename = req.params.filename;
            fs.unlink("./uploads/".concat(filename), function (err) {
              if (err && err.code == 'ENOENT') {
                console.info("File doesn't exist, won't remove it.");
              } else if (err) {
                console.error("Error occurred while trying to remove file");
              } else {
                return res.status(204).json({
                  mensaje: "Se ha eliminado el archivo"
                });
              }
            });

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _eliminarArchivo.apply(this, arguments);
}

function consultarLinks(_x17, _x18) {
  return _consultarLinks.apply(this, arguments);
}

function _consultarLinks() {
  _consultarLinks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var links;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _Participantes["default"].findAll({
              attributes: ['links'],
              where: {
                numero_documento: req.params.idParticipante
              }
            });

          case 3:
            links = _context9.sent;
            res.json({
              links: links
            });
            _context9.next = 11;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            console.log("error en la peticion", _context9.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return _consultarLinks.apply(this, arguments);
}

function guardarPostulacionParticipantes(_x19, _x20) {
  return _guardarPostulacionParticipantes.apply(this, arguments);
}

function _guardarPostulacionParticipantes() {
  _guardarPostulacionParticipantes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var idParticipante, postulaciones, existe, participante;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            idParticipante = req.params.idParticipante;
            postulaciones = req.body;
            _context10.prev = 2;
            _context10.next = 5;
            return _Participantes["default"].findOne({
              where: {
                numero_documento: idParticipante
              }
            });

          case 5:
            existe = _context10.sent;

            if (existe) {
              _context10.next = 8;
              break;
            }

            return _context10.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 8:
            _context10.next = 10;
            return _Participantes["default"].update({
              postulaciones: postulaciones
            }, {
              where: {
                numero_documento: idParticipante
              }
            });

          case 10:
            participante = _context10.sent;
            res.json({
              data: postulaciones,
              mensaje: "Se han asociado correctamente los documentos al participante "
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
  return _guardarPostulacionParticipantes.apply(this, arguments);
}

function obtenerPostulacionParticipante(_x21, _x22) {
  return _obtenerPostulacionParticipante.apply(this, arguments);
}

function _obtenerPostulacionParticipante() {
  _obtenerPostulacionParticipante = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var postulaciones;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _Participantes["default"].findAll({
              attributes: ['postulaciones'],
              where: {
                numero_documento: req.params.idParticipante
              }
            });

          case 3:
            postulaciones = _context11.sent;

            if (!(postulaciones == null)) {
              _context11.next = 6;
              break;
            }

            return _context11.abrupt("return", res.json({
              data: []
            }));

          case 6:
            res.json({
              data: postulaciones
            });
            _context11.next = 13;
            break;

          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);
            console.log("error en la peticion", _context11.t0);
            res.status(400).json({
              mensaje: "Proceso no se completo",
              data: {}
            });

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 9]]);
  }));
  return _obtenerPostulacionParticipante.apply(this, arguments);
}

function actualizarEstadoSubsanacionDocumento(_x23, _x24) {
  return _actualizarEstadoSubsanacionDocumento.apply(this, arguments);
}

function _actualizarEstadoSubsanacionDocumento() {
  _actualizarEstadoSubsanacionDocumento = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var idParticipante, _req$body3, idDocumento, estado, participanteExiste, Documentoexiste;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            idParticipante = req.params.idParticipante;
            _req$body3 = req.body, idDocumento = _req$body3.idDocumento, estado = _req$body3.estado;
            _context12.prev = 2;
            _context12.next = 5;
            return _Participantes["default"].findOne({
              where: {
                numero_documento: idParticipante
              }
            });

          case 5:
            participanteExiste = _context12.sent;

            if (participanteExiste) {
              _context12.next = 8;
              break;
            }

            return _context12.abrupt("return", res.status(400).json({
              mensaje: "Participante no existe",
              data: {}
            }));

          case 8:
            if (!(participanteExiste.dataValues.documentos !== null)) {
              _context12.next = 18;
              break;
            }

            Documentoexiste = participanteExiste.dataValues.documentos.filter(function (doc) {
              return doc.id === idDocumento;
            });

            if (!Documentoexiste) {
              _context12.next = 17;
              break;
            }

            Documentoexiste[0].EstadoSubsanable = estado;
            _context12.next = 14;
            return _Participantes["default"].update({
              documentos: participanteExiste.dataValues.documentos
            }, {
              where: {
                numero_documento: idParticipante
              }
            });

          case 14:
            return _context12.abrupt("return", res.json({
              mensaje: "Se actualizo correctamete el estado del documento",
              data: Documentoexiste
            }));

          case 17:
            return _context12.abrupt("return", res.json({
              mensaje: "El documento no exite",
              data: {}
            }));

          case 18:
            _context12.next = 23;
            break;

          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](2);
            return _context12.abrupt("return", res.status(400).json({
              mensaje: "Problemas en la conexion a la base de datos",
              data: {}
            }));

          case 23:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 20]]);
  }));
  return _actualizarEstadoSubsanacionDocumento.apply(this, arguments);
}