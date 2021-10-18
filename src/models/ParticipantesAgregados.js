import Sequelize from 'sequelize';
import { sequelizeconfig } from '../database/database';

const ParticipantesAgregados = sequelizeconfig.define('participantes_agregados', {
    id_participantes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo_identificacion: {
        type: Sequelize.ENUM('CC', 'TI', 'CE', 'TE', 'NI', 'PA', 'TDE', 'SIN'),
        primaryKey: true,
    },
    numero_documento: {
        type: Sequelize.INTEGER,
    },
    mayor_edad: {
        type: Sequelize.BOOLEAN,
    },
    primer_nombre: {
        type: Sequelize.STRING,
    },
    segundo_nombre: {
        type: Sequelize.STRING,
    },
    primer_apellido: {
        type: Sequelize.STRING,
    },
    segundo_apellido: {
        type: Sequelize.STRING,
    },
    rango_edad: {
        type: Sequelize.INTEGER,
    },
    rol: {
        type: Sequelize.STRING,
    },
    grupo_etnico: {
        type: Sequelize.STRING,
    },
    orientacion_sexual: {
        type: Sequelize.STRING,
    },
    identidad: {
        type: Sequelize.STRING,
    },
    participante_id: {
        type: Sequelize.INTEGER,
    },
    fecha_creacion: {
        type: Sequelize.DATE,
    },
    fecha_modificacion: {
        type: Sequelize.DATE,
    },
    usuario_creacion: {
        type: Sequelize.STRING,
    },
    usuario_modificacion: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default ParticipantesAgregados;
