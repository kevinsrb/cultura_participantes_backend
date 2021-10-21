import Sequelize from "sequelize";
import { sequelizeconfig } from "../database/database";

const Documentos = sequelizeconfig.define(
  "documentos_convocatoria",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: Sequelize.STRING,
    },
    tipo_documento_id: {
      type: Sequelize.INTEGER,
    },
    tipo_documento: {
      type: Sequelize.STRING,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    tipo_persona: {
      type: Sequelize.INTEGER,
    },
    activo: {
      type: Sequelize.BOOLEAN,
    },
    sustentable: {
      type: Sequelize.BOOLEAN,
    },
    obligatorio: {
      type: Sequelize.BOOLEAN,
    },
    url_documento: {
      type: Sequelize.STRING,
    },
    usuario_creacion: {
      type: Sequelize.INTEGER,
    },
    usuario_modificacion: {
      type: Sequelize.INTEGER,
    },
    fecha_creacion: {
      type: Sequelize.DATE,
    },
    fecha_actualizacion: {
      type: Sequelize.DATE,
    },
    responsable: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.STRING,
    },
    idconvocatoria: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default Documentos;
