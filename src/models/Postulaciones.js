import Sequelize from 'sequelize';
import { sequelizeconfig } from '../database/database';

const Postulaciones = sequelizeconfig.define('postulaciones', {
    id_postulacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    convocatoria_id: {
        type: Sequelize.INTEGER,
    },
    numero_documento_participante: {
        type: Sequelize.INTEGER,
    },
    nombre_propuesta: {
        type: Sequelize.STRING,
    },
    jurados: {
        type: Sequelize.JSON,
    },
    estado_jurado: {
        type: Sequelize.CHAR,
    },
    tipo_participante: {
        type: Sequelize.CHAR,
    },
    links: {
        type: Sequelize.JSON,
    },
    nombre_convocatoria: {
        type: Sequelize.STRING,
    },
    categoria_linea_convocatoria: {
        type: Sequelize.JSON,
    },
    participante: {
        type: Sequelize.JSON,
    },
    fecha_apertura: {
        type: Sequelize.DATE,
    },
    estado: {
        type: Sequelize.STRING,
    },
    documentos: {
        type: Sequelize.JSON,
    },
    documentos_generales: {
        type: Sequelize.JSON,
    },
    documentos_tecnicos: {
        type: Sequelize.JSON,
    },
    documentos_administrativos: {
        type: Sequelize.JSON,
    },
    fecha_creacion: {
        type: Sequelize.DATE,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Postulaciones;
