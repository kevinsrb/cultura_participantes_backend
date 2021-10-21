import Sequelize from "sequelize";
import { sequelizeconfig } from "../database/database";

const TiposDocumentos = sequelizeconfig.define(
  "tipos_documentos",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    tipo_participante_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default TiposDocumentos;
