"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var ParticipantesAgregados = _database.sequelizeconfig.define('participantes_agregados', {
  id_participantes: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo_identificacion: {
    type: _sequelize["default"].ENUM('CC', 'TI', 'CE', 'TE', 'NI', 'PA', 'TDE', 'SIN'),
    primaryKey: true
  },
  numero_documento: {
    type: _sequelize["default"].INTEGER
  },
  mayor_edad: {
    type: _sequelize["default"].BOOLEAN
  },
  primer_nombre: {
    type: _sequelize["default"].STRING
  },
  segundo_nombre: {
    type: _sequelize["default"].STRING
  },
  primer_apellido: {
    type: _sequelize["default"].STRING
  },
  segundo_apellido: {
    type: _sequelize["default"].STRING
  },
  rango_edad: {
    type: _sequelize["default"].INTEGER
  },
  rol: {
    type: _sequelize["default"].STRING
  },
  grupo_etnico: {
    type: _sequelize["default"].STRING
  },
  orientacion_sexual: {
    type: _sequelize["default"].STRING
  },
  identidad: {
    type: _sequelize["default"].STRING
  },
  participante_id: {
    type: _sequelize["default"].INTEGER
  },
  fecha_creacion: {
    type: _sequelize["default"].DATE
  },
  fecha_modificacion: {
    type: _sequelize["default"].DATE
  },
  usuario_creacion: {
    type: _sequelize["default"].STRING
  },
  usuario_modificacion: {
    type: _sequelize["default"].STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = ParticipantesAgregados;
exports["default"] = _default;