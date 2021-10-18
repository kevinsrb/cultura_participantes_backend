import Participantes from "../models/Participantes";
import { sequelizeconfig } from "../database/database";
import { validationResult } from "express-validator";
import moment from "moment";

export async function crearParticipante(req, res) {
  let fecha_creacion = moment().format("YYYY-MM-DD");
  const {
    tipo_identificacion,
    numero_documento,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento,
    sexo,
    pais_nacimiento,
    pais_residencia,
    departamento,
    municipio,
    comuna,
    barrio,
    estrato,
    telefono_fijo,
    telefono_celular,
    correo_electronico,
    tipo_participante
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
      Participantes.create({
        tipo_identificacion,
        numero_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        fecha_nacimiento,
        sexo,
        pais_nacimiento,
        pais_residencia,
        departamento,
        municipio,
        comuna,
        barrio,
        estrato,
        telefono_fijo,
        telefono_celular,
        correo_electronico,
        tipo_participante,
        fecha_creacion
      })
        .then((data) => {
          res.json({
            mensaje: "Se ha creado correctamente el participante",
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


export async function obtenerIdParticipante(req, res) {
  try {
    let totalParticipantes = await Participantes.count();
    if (totalParticipantes > 0) {
      let secuencia = await sequelizeconfig.query("SELECT * FROM participante_seq;");
      console.log(secuencia);
      return res.json({
        data: parseInt(secuencia[0][0].last_value) + 1,
      });
    }
     return res.json({
      data: 1,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function obtenerParticipante(req, res) {
  try {
    const { id } = req.params;
    const participante = await Participantes.findOne({
      where: {
        id_participante: id,
      },
    });
    if (participante == null) {
      return res.json({
        data: [],
      });
    }
    res.json({
      data: participante,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}
