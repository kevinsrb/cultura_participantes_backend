import ParticipantesAgregados from "../models/ParticipantesAgregados";
import { sequelizeconfig } from "../database/database";
import { validationResult } from "express-validator";
import moment from "moment";

export async function crearParticipantes(req, res) {
  let fecha_creacion = moment().format("YYYY-MM-DD");
  const {
    mayor_edad,
    tipo_identificacion,
    numero_documento,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    rango_edad,
    rol,
    grupo_etnico,
    orientacion_sexual,
    identidad,
    participante_id
  } = req.body;

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      mensaje: errores.array(),
    });
  }

  sequelizeconfig
    .authenticate()
    .then((data) => {
      ParticipantesAgregados.create({
        mayor_edad,
        tipo_identificacion,
        numero_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        rango_edad,
        rol,
        grupo_etnico,
        orientacion_sexual,
        identidad,
        participante_id,
        fecha_creacion
      })
        .then((data) => {
          res.json({
            mensaje: "Se guardaron correctamente todos los participantes",
            data: data,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(400).json({
            mensaje: "Proceso no se completo",
            data: {},
          });
        });
    })
    .catch((error) => {
      console.log("error en la conexion", error);
      res.status(400).json({
        mensaje: "Problemas en la conexion a la base de datos",
        data: {},
      });
    });
}

export async function consultarParctipantesAgregados(req, res) {
 
  try {
    const participantesAgregados = await ParticipantesAgregados.findAll();
    res.json({
      data: participantesAgregados,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function consultarParctipanteAgregado(req, res) {
  const { id } = req.params;
  try {
    const participanteAgregado = await ParticipantesAgregados.findOne({
      where: {
        id_participantes: id,
      },
    });
    res.json({
      data: participanteAgregado,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}


export async function eliminarParticipante(req, res) {
  const { id } = req.params;
  try {
    let participante = await ParticipantesAgregados.findOne({
      where: {
        id_participantes: id,
      },
    });
    if (!participante) {
      return res.status(400).json({
        mensaje: "Participante no existe",
        data: {},
      });
    }
    let eliminar = await ParticipantesAgregados.destroy({
      where: {
        id_participantes: id,
      },
    });
    res.status(200).json({
      data: "Proceso completado",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function obtenerParticipantesByIdParticipante(req, res) {
  try {
    const { id } = req.params;
    const participanteAgregado = await ParticipantesAgregados.findAll({
      where: {
        participante_id,
      },
    });
    if (participanteAgregado == null) {
      return res.json({
        data: [],
      });
    }
    res.json({
      data: participanteAgregado,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}