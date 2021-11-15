import Sequelize from 'sequelize';
import { sequelizeconfig } from '../database/database';

const Participantes = sequelizeconfig.define('participantes', {
    id_participante: {
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
    fecha_nacimiento: {
        type: Sequelize.DATE,
    },
    sexo: {
        type: Sequelize.ENUM('M', 'F'),
        primaryKey: true,
    },
    pais_nacimiento: {
        type: Sequelize.STRING,
    },
    pais_residencia: {
        type: Sequelize.STRING,
    },
    departamento: {
        type: Sequelize.STRING,
    },
    municipio: {
        type: Sequelize.STRING,
    },
    comuna: {
        type: Sequelize.STRING,
    },
    barrio: {
        type: Sequelize.STRING,
    },
    estrato: {
        type: Sequelize.STRING,
    },
    telefono_fijo: {
        type: Sequelize.STRING,
    },
    telefono_celular: {
        type: Sequelize.STRING,
    },
    correo_electronico: {
        type: Sequelize.STRING,
    },
    documentos : {
        type: Sequelize.JSON,
    },
    tipo_participante: {
        type: Sequelize.INTEGER,
    },
    links: {
        type: Sequelize.JSON,
    },
    postulaciones: {
        type: Sequelize.JSON,
    },
    datos_empresa: {
        type: Sequelize.JSON,
    },
    usuario_id: {
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

export default Participantes;
