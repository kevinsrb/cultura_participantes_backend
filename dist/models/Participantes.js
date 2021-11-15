"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Participantes = _database.sequelizeconfig.define('participantes', {
  id_participante: {
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
  fecha_nacimiento: {
    type: _sequelize["default"].DATE
  },
  sexo: {
    type: _sequelize["default"].ENUM('M', 'F'),
    primaryKey: true
  },
  pais_nacimiento: {
    type: _sequelize["default"].STRING
  },
  pais_residencia: {
    type: _sequelize["default"].STRING
  },
  departamento: {
    type: _sequelize["default"].STRING
  },
  municipio: {
    type: _sequelize["default"].STRING
  },
  comuna: {
    type: _sequelize["default"].STRING
  },
  barrio: {
    type: _sequelize["default"].STRING
  },
  estrato: {
    type: _sequelize["default"].STRING
  },
  telefono_fijo: {
    type: _sequelize["default"].STRING
  },
  telefono_celular: {
    type: _sequelize["default"].STRING
  },
  correo_electronico: {
    type: _sequelize["default"].STRING
  },
  documentos: {
    type: _sequelize["default"].JSON
  },
  tipo_participante: {
    type: _sequelize["default"].INTEGER
  },
  links: {
    type: _sequelize["default"].JSON
  },
  postulaciones: {
    type: _sequelize["default"].JSON
  },
  datos_empresa: {
    type: _sequelize["default"].JSON
  },
  usuario_id: {
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

var _default = Participantes;
exports["default"] = _default;