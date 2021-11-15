"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Postulaciones = _database.sequelizeconfig.define('postulaciones', {
  id_postulacion: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  convocatoria_id: {
    type: _sequelize["default"].INTEGER
  },
  numero_documento_participante: {
    type: _sequelize["default"].INTEGER
  },
  nombre_propuesta: {
    type: _sequelize["default"].STRING
  },
  jurados: {
    type: _sequelize["default"].JSON
  },
  estado_jurado: {
    type: _sequelize["default"].CHAR
  },
  tipo_participante: {
    type: _sequelize["default"].CHAR
  },
  links: {
    type: _sequelize["default"].JSON
  },
  nombre_convocatoria: {
    type: _sequelize["default"].STRING
  },
  categoria_linea_convocatoria: {
    type: _sequelize["default"].JSON
  },
  participante: {
    type: _sequelize["default"].JSON
  },
  fecha_apertura: {
    type: _sequelize["default"].DATE
  },
  estado: {
    type: _sequelize["default"].STRING
  },
  documentos: {
    type: _sequelize["default"].JSON
  },
  documentos_generales: {
    type: _sequelize["default"].JSON
  },
  documentos_tecnicos: {
    type: _sequelize["default"].JSON
  },
  documentos_administrativos: {
    type: _sequelize["default"].JSON
  },
  fecha_creacion: {
    type: _sequelize["default"].DATE
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = Postulaciones;
exports["default"] = _default;