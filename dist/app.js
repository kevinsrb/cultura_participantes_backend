"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger_output = _interopRequireDefault(require("../swagger_output.json"));

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _participantes = _interopRequireDefault(require("./routes/participantes.routes"));

var _participantesAgregados = _interopRequireDefault(require("./routes/participantesAgregados.routes"));

var _postulaciones = _interopRequireDefault(require("./routes/postulaciones.routes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

dotenv.config();
//  APP
var app = (0, _express["default"])(); // MIDDLEWARES

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use((0, _cors["default"])());
app.use((0, _expressFileupload["default"])());
app.use('/doc', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger_output["default"])); // ROUTES

app.use('/api/participantes', _participantes["default"]);
app.use('/api/partipantesAgregados', _participantesAgregados["default"]);
app.use('/api/postulaciones', _postulaciones["default"]);
var _default = app;
exports["default"] = _default;