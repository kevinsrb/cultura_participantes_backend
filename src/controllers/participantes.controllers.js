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
    tipo_participante,
    usuario_id
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
        fecha_creacion,
        usuario_id
      })
        .then((data) => {
            /* 	#swagger.tags = ['Participante']
                #swagger.description = 'Endpoint to save participante' */

          /*	#swagger.parameters['obj'] = {
                  in: 'body',
                  description: 'Participante information.',
                  required: true,
                  schema: { $ref: "#/definitions/Participante" }
          } */

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

export async function consultarParticipantes(req, res) {
  try {
    // #swagger.description = 'Endpoint used to obtain a user.'
    const participantes = await Participantes.findAll();

    res.json({
      participantes,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
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
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'get a participante',
                schema: { $ref: '#/Models/Participantes' }
   } */
  try {
    const { idParticipante } = req.params;
    const participante = await Participantes.findOne({
      where: {
        usuario_id: idParticipante,
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

export async function editarParticipante(req, res) {
  const { usuario_id } = req.params;
  console.log(usuario_id, 'AQUIIIII')
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
    tipo_participante,
    datos_empresa,
  } = req.body;
  try {
    let existe = await Participantes.findOne({
      where: {
        usuario_id: usuario_id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Participante no existe",
        data: {},
      });
    }

    const participante = await Participantes.update(
      {
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
        datos_empresa
      },
      {
        where: {
          usuario_id: usuario_id,
        },
      }
    );
    res.json({
      mensaje: "Se ha actualizado correctamente el participante",
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



export async function guardarArchivo(req, res) {
  console.log(req.files);
  let file = req.files.archivo;

  file.mv(`./uploads/${file.name}`, (err, data) => {
    console.log(err, data);
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).json({
      mensaje: "Proceso completado",
      data: file.name,
    });
  });
}

export async function consultarArchivos(req, res) {
  const { filename } = req.params;
  console.log(filename);
  let fs = require("fs");
  let file = fs.createReadStream(`./uploads/${filename}`);
  console.log(file);
  file.pipe(res);
  // let ext = filename.split(".");
  // res.json({
  //   extension: ext[1],
  // });
  // res.status(400).json({
  //   mensaje: 'Proceso no completado', data: {}
  // })
}

export async function eliminarArchivo(req, res) {
  const fs = require('fs');
  const { filename } = req.params;

  fs.unlink(`./uploads/${filename}`, function(err) {
    if(err && err.code == 'ENOENT') {
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        console.error("Error occurred while trying to remove file");
    } else {
      return res.status(204).json({
        mensaje: "Se ha eliminado el archivo",
      });
    }
  });

}





export async function consultarLinks(req, res) {
  // const { idParticipante } = req.params;
  try {
    const links = await Participantes.findAll({
      attributes: ['links'],
      where: {
        numero_documento: req.params.idParticipante 
      } 
    })
  
    res.json({
      links,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarPostulacionParticipantes(req, res) {
  const { idParticipante } = req.params;
  const  postulaciones  = req.body;

  try {
    let existe = await Participantes.findOne({
      where: {
        numero_documento: idParticipante,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Participante no existe",
        data: {},
      });
    }

    const participante = await Participantes.update(
      {
        postulaciones,
      },
      {
        where: {
          numero_documento: idParticipante,
        },
      }
    );
    res.json({
      data: postulaciones,
      mensaje: "Se han asociado correctamente los documentos al participante ",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function obtenerPostulacionParticipante(req, res) {
  try {
    const postulaciones = await Participantes.findAll({
      attributes: ['postulaciones'],
      where: {
        numero_documento: req.params.idParticipante 
      } 
    });

    if (postulaciones == null) {
      return res.json({
        data: [],
      });
    }
    res.json({
      data: postulaciones,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function actualizarEstadoSubsanacionDocumento(req, res) {
  const { idParticipante } = req.params;
  let { idDocumento, estado } = req.body;

  try {
    let participanteExiste = await Participantes.findOne({
      where: {
        numero_documento: idParticipante,
      },
    });
    if (!participanteExiste) {
      return res.status(400).json({
        mensaje: "Participante no existe",
        data: {},
      });
    }

    if (participanteExiste.dataValues.documentos !== null) {

      let Documentoexiste = participanteExiste.dataValues.documentos.filter(
        (doc) => doc.id === idDocumento
      );

      if (Documentoexiste) {

        Documentoexiste[0].EstadoSubsanable = estado;
        await Participantes.update(
          {
            documentos: participanteExiste.dataValues.documentos
          },
          {
            where: {
              numero_documento: idParticipante,
            },
          }
        );
        return res.json({
          mensaje: "Se actualizo correctamete el estado del documento",
          data: Documentoexiste,
        });

      }else{
        return res.json({
          mensaje: "El documento no exite",
          data: {},
        });
      }
    }

  } catch (error) {
    return res.status(400).json({
      mensaje: "Problemas en la conexion a la base de datos",
      data: {},
    });
  }
}
