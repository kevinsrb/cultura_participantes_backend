import Postulaciones from "../models/Postulaciones";
import { sequelizeconfig } from "../database/database";
import { validationResult } from "express-validator";
import moment from "moment";
import Participantes from "../models/Participantes";

export async function crearPostulacion(req, res) {
  let fecha_creacion = moment().format("YYYY-MM-DD");

  const {
    convocatoria_id,
    nombre_convocatoria,
    categoria_linea_convocatoria,
    fecha_apertura,
    estado
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
      Postulaciones.create({
        Postulaciones_id,
        nombre_Postulaciones,
        categoria_linea_Postulaciones,
        fecha_apertura,
        estado,
      })
        .then((data) => {
          res.json({
            mensaje: "Se ha creado la postulaion correctamente",
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

export async function consultarPostulaciones(req, res) {
  try {
    const postulaciones = await Postulaciones.findAll();

    let i = 0;
    for (i in postulaciones) {
      if (postulaciones[i].numero_documento_participante !== null) {
        let numeroDocumento = postulaciones[i].numero_documento_participante.toString();

        let participante = await Participantes.findOne({
          where: {
            numero_documento: numeroDocumento,
          },
        });

        if (!participante) {
          return res.status(400).json({
            mensaje: "Participante no existe",
            data: {},
          });
        }

        postulaciones[i].participante = participante;
      }
    }

    res.json({
      postulaciones,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function cambiarEstadoPostulacion(req, res) {
  // const { id_postulacion } = req.params;
  const { id_postulacion, estado } = req.body;

  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    const postulacion = await Postulaciones.update(
      {
        estado: estado,
      },
      {
        where: {
          id_postulacion: id_postulacion,
        },
      }
    );
    res.json({
      data: postulacion,
      mensaje: "Se han actualizado el estado de la postulacion ",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function cambiarTipoParticipantePostulacion(req, res) {
  // const { id_postulacion } = req.params;
  const { id_postulacion, tipo_participante } = req.body;
  console.log(id_postulacion);
  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    const postulacion = await Postulaciones.update(
      {
        tipo_participante: tipo_participante,
      },
      {
        where: {
          id_postulacion: id_postulacion,
        },
      }
    );
    res.json({
      data: postulacion,
      mensaje: "Se han actualizado el estado de la postulacion ",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarLinksPostulacion(req, res) {
  const { id_postulacion } = req.params;
  const links = req.body;

  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Participante no existe",
        data: {},
      });
    }

    const postulaciones = await Postulaciones.update(
      {
        links,
      },
      {
        where: {
          id_postulacion: id_postulacion,
        },
      }
    );
    res.json({
      data: postulaciones,
      mensaje: "Se han asociado correctamente los linsk al participante ",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function actualizarNombrePropuesta(req, res) {
  // const { id_postulacion } = req.params;
  const { id_postulacion, nombrePropuesta } = req.body;

  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    const postulacion = await Postulaciones.update(
      {
        nombre_propuesta: nombrePropuesta,
      },
      {
        where: {
          id_postulacion: id_postulacion,
        },
      }
    );
    res.json({
      data: postulacion,
      mensaje: "Se han actualizado el estado de la postulacion ",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}


//Documentos
export async function consultarDocumentosTecnicos(req, res) {
  const { id } = req.params;
  try {

    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos_tecnicos = await Postulaciones.findOne({
      attributes: ['documentos_tecnicos'],
      where: {
        id_postulacion: id,
      } 
    })
  
    res.json(
      documentos_tecnicos,
    );
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarDocumentosTecnicos(req, res) {
  const { id } = req.params;
  const  documentos_tecnicos  = req.body;

  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos = await Postulaciones.update(
      {
        documentos_tecnicos,
      },
      {
        where: {
          id_postulacion: id,
        },
      }
    );
    res.json({
      data: documentos,
      mensaje: "Se han asociado correctamente los documentos tecnicos a la Postulaciones",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function consultarDocumentosGenerales(req, res) {
  const { id } = req.params;
  try {

    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos_generales = await Postulaciones.findOne({
      attributes: ['documentos_generales'],
      where: {
        id_postulacion: id,
      } 
    })
  
    res.json(
      documentos_generales,
    );
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}


export async function guardarDocumentosGenerales(req, res) {
  const { id } = req.params;
  const  documentos_generales  = req.body;

  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos = await Postulaciones.update(
      {
        documentos_generales,
      },
      {
        where: {
          id_postulacion: id,
        },
      }
    );
    res.json({
      data: documentos,
      mensaje: "Se han asociado correctamente los documentos generales a la Postulaciones",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function consultarDocumentosAdministrativos(req, res) {
  const { id } = req.params;
  try {

    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos_administrativos = await Postulaciones.findOne({
      attributes: ['documentos_administrativos'],
      where: {
        id_postulacion: id,
      } 
    })
  
    res.json(
      documentos_administrativos,
    );
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarDocumentosAdministrativos(req, res) {
  const { id } = req.params;
  const  documentos_administrativos  = req.body;
console.log('dsf')
  try {
    let existe = await Postulaciones.findOne({
      where: {
        id_postulacion: id,
      },
    });
    if (!existe) {
      return res.status(400).json({
        mensaje: "Postulaciones no existe",
        data: {},
      });
    }

    const documentos = await Postulaciones.update(
      {
        documentos_administrativos,
      },
      {
        where: {
          id_postulacion: id,
        },
      }
    );
    res.json({
      data: documentos,
      mensaje: "Se han asociado correctamente los documentos administrativos a la Postulaciones",
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarUrlDocumentosTecnicosPostulacion(req, res) {
  // const { id_postulacion } = req.params;

  const { id_postulacion, index, filename } = req.body;
  console.log(index)

  try {
    let postulacionExiste = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!postulacionExiste) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    if (postulacionExiste.dataValues.documentos_tecnicos !== null && postulacionExiste.dataValues.documentos_tecnicos !== undefined) {
      let documentoExiste = postulacionExiste.dataValues.documentos_tecnicos.filter((doc) => doc.index === index);
      if (documentoExiste.length > 0) {

        documentoExiste[0].url_participante = filename;
        console.log(documentoExiste)

        await Postulaciones.update(
          {
            documentos_tecnicos: postulacionExiste.dataValues.documentos_tecnicos,
          },
          {
            where: {
              id_postulacion: id_postulacion,
            },
          }
        );
        return res.json({
          mensaje: "Se actualizo correctamete el estado del documento",
          data: documentoExiste,
        });
      } else {
        return res.json({
          mensaje: "El documento no exite",
          data: {},
        });
      }
    }
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarUrlDocumentosAdministrativosPostulacion(req, res) {
  // const { id_postulacion } = req.params;

  const { id_postulacion, index, filename } = req.body;
  console.log(index)

  try {
    let postulacionExiste = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!postulacionExiste) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    if (postulacionExiste.dataValues.documentos_administrativos !== null && postulacionExiste.dataValues.documentos_administrativos !== undefined) {
      let documentoExiste = postulacionExiste.dataValues.documentos_administrativos.filter((doc) => doc.index === index);
      if (documentoExiste.length > 0) {

        documentoExiste[0].url_participante = filename;
        console.log(documentoExiste)

        await Postulaciones.update(
          {
            documentos_administrativos: postulacionExiste.dataValues.documentos_administrativos,
          },
          {
            where: {
              id_postulacion: id_postulacion,
            },
          }
        );
        return res.json({
          mensaje: "Se actualizo correctamete el estado del documento",
          data: documentoExiste,
        });
      } else {
        return res.json({
          mensaje: "El documento no exite",
          data: {},
        });
      }
    }
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function guardarUrlDocumentosGeneralesPostulacion(req, res) {
  // const { id_postulacion } = req.params;

  const { id_postulacion, index, filename } = req.body;
  console.log(index)

  try {
    let postulacionExiste = await Postulaciones.findOne({
      where: {
        id_postulacion: id_postulacion,
      },
    });
    if (!postulacionExiste) {
      return res.status(400).json({
        mensaje: "Postulacion no existe",
        data: {},
      });
    }

    if (postulacionExiste.dataValues.documentos_generales !== null && postulacionExiste.dataValues.documentos_generales !== undefined) {
      let documentoExiste = postulacionExiste.dataValues.documentos_generales.filter((doc) => doc.index === index);
      if (documentoExiste.length > 0) {

        documentoExiste[0].url_participante = filename;
        console.log(documentoExiste)

        await Postulaciones.update(
          {
            documentos_generales: postulacionExiste.dataValues.documentos_generales,
          },
          {
            where: {
              id_postulacion: id_postulacion,
            },
          }
        );
        return res.json({
          mensaje: "Se actualizo correctamete el estado del documento",
          data: documentoExiste,
        });
      } else {
        return res.json({
          mensaje: "El documento no exite",
          data: {},
        });
      }
    }
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}