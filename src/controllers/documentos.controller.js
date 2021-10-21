import Documentos from "../models/Documentos";
import TiposDocumentos from "../models/TiposDocumentos";
// import Convocatoria from "../models/Convocatorias";
import moment from "moment";
import { validationResult } from "express-validator";

// export async function guardarDocumentosAdministrativos(req, res) {
//   let fecha_creacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, tipo_documento, tipo_documento_id, tipo_persona, descripcion, sustentable, obligatorio, url_documento } =
//     req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   console.log('consultado convocatoria')
//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     console.log('creando documento')

//     const nuevoDocumento = await Documentos.create({
//       idconvocatoria,
//       tipo_documento,
//       tipo_documento_id,
//       tipo_persona,
//       sustentable,
//       obligatorio,
//       descripcion,
//       url_documento,
//       fecha_creacion,
//     });

//     console.log('despues de crear el documento')

//     let id = nuevoDocumento.dataValues.id;
//     idconvocatoria = nuevoDocumento.dataValues.idconvocatoria;
//     tipo_documento = nuevoDocumento.dataValues.tipo_documento;
//     tipo_documento_id = nuevoDocumento.dataValues.tipo_documento_id;
//     url_documento = nuevoDocumento.dataValues.url_documento;
//     tipo_persona = nuevoDocumento.dataValues.tipo_persona;
//     sustentable = nuevoDocumento.dataValues.sustentable;
//     obligatorio = nuevoDocumento.dataValues.obligatorio;
//     descripcion = nuevoDocumento.dataValues.descripcion;
//     fecha_creacion = nuevoDocumento.dataValues.fecha_creacion;

//     if (convocatoriaexist.dataValues.documentos === null) {
//       var documentos = [
//         {
//           id,
//           idconvocatoria,
//           tipo_documento,
//           tipo_documento_id,
//           tipo_persona,
//           sustentable,
//           obligatorio,
//           descripcion,
//           url_documento,
//           fecha_creacion,
//         },
//       ];
//     } else {
//       var documentos = [
//         ...convocatoriaexist.dataValues.documentos,
//         {
//           id,
//           idconvocatoria,
//           tipo_documento,
//           tipo_documento_id,
//           tipo_persona,
//           sustentable,
//           obligatorio,
//           descripcion,
//           url_documento,
//           fecha_creacion,
//         },
//       ];
//     }

//     const convocatorias = await Convocatoria.update(
//       {
//         documentos,
//       },
//       {
//         where: {
//           idconvocatorias: idconvocatoria,
//         },
//       }
//     );

//     return res.json({
//       mensaje: "Proceso completado",
//       data: documentos,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
// }

// export async function editarDocumentosAdministrativos(req, res) {
//   let fecha_modificacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, tipo_documento_id, tipo_persona, descripcion, sustentable, obligatorio, url_documento } = req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     console.log(convocatoriaexist, "esta es la convocatoria");

//     if (convocatoriaexist.dataValues.documentos !== null) {
//       let existe = convocatoriaexist.dataValues.documentos.filter(
//         (doc) => doc.descripcion.trim() === descripcion.trim() && doc.idconvocatoria === idconvocatoria
//       );
//       // console.log(existe.length, "este documento si existe");
//       if (existe.length > 0) {
//         for (var i in convocatoriaexist.dataValues.documentos) {
//           console.log(
//             convocatoriaexist.dataValues.documentos[i].descripcion,
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria,
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id
//           );
//           if (
//             convocatoriaexist.dataValues.documentos[i].descripcion.trim() === descripcion.trim() &&
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria === idconvocatoria &&
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id === tipo_documento_id
//           ) {
//             convocatoriaexist.dataValues.documentos[i].tipo_persona = tipo_persona;
//             convocatoriaexist.dataValues.documentos[i].sustentable = sustentable;
//             convocatoriaexist.dataValues.documentos[i].url_documento = url_documento;
//             convocatoriaexist.dataValues.documentos[i].obligatorio = obligatorio;
//             convocatoriaexist.dataValues.documentos[i].fecha_modificacion = fecha_modificacion;
//             console.log(url_documento, "paso la parte de documentos")
//             await Convocatoria.update(
//               {
//                 documentos: convocatoriaexist.dataValues.documentos,
//               },
//               {
//                 where: {
//                   idconvocatorias: convocatoriaexist.dataValues.documentos[i].id,
//                 },
//               }
//             );
//             console.log("ahora voy a actualizar documentos")
//             await Documentos.update(
//               {
//                 tipo_persona,
//                 sustentable,
//                 url_documento,
//                 obligatorio,
//                 fecha_modificacion,
//               },
//               {
//                 where: {
//                   id: convocatoriaexist.dataValues.documentos[i].id,
//                 },
//               }
//             );
//           }
//         }
//         return res.json({
//           mensaje: "Proceso completado",
//           data: convocatoriaexist.dataValues.documentos,
//         });
//       }
//       console.log("este doncumento no existe y se va a crearlo");
//       return guardarDocumentosAdministrativos(req, res);
//     }
//     return guardarDocumentosAdministrativos(req, res);
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
// }

// export async function guardarDocumentosTecnicos(req, res) {
//   let fecha_creacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, tipo_documento, tipo_documento_id, descripcion, activo, url_documento } = req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     const nuevoDocumento = await Documentos.create({
//       idconvocatoria,
//       tipo_documento,
//       tipo_documento_id,
//       activo,
//       url_documento,
//       descripcion,
//       fecha_creacion,
//     });

//     let id = nuevoDocumento.dataValues.id;
//     idconvocatoria = nuevoDocumento.dataValues.idconvocatoria;
//     tipo_documento = nuevoDocumento.dataValues.tipo_documento;
//     tipo_documento_id = nuevoDocumento.dataValues.tipo_documento_id;
//     activo = nuevoDocumento.dataValues.activo;
//     url_documento = nuevoDocumento.dataValues.url_documento;
//     descripcion = nuevoDocumento.dataValues.descripcion;
//     fecha_creacion = nuevoDocumento.dataValues.fecha_creacion;

//     if (convocatoriaexist.dataValues.documentos === null) {
//       var documentos = [
//         { id, idconvocatoria, tipo_documento, tipo_documento_id, activo, url_documento, descripcion, fecha_creacion },
//       ];
//     } else {
//       var documentos = [
//         ...convocatoriaexist.dataValues.documentos,
//         { id, idconvocatoria, tipo_documento, tipo_documento_id, activo, url_documento, descripcion, fecha_creacion },
//       ];
//     }

//     const convocatorias = await Convocatoria.update(
//       {
//         documentos,
//       },
//       {
//         where: {
//           idconvocatorias: idconvocatoria,
//         },
//       }
//     );

//     return res.json({
//       mensaje: "Proceso completado",
//       data: documentos,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
// }

// export async function editarDocumentosTecnicos(req, res) {
//   let fecha_modificacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, tipo_documento, tipo_documento_id, descripcion, activo, url_documento } = req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     console.log(convocatoriaexist, "esta es la convocatoria");

//     if (convocatoriaexist.dataValues.documentos !== null) {
//       let existe = convocatoriaexist.dataValues.documentos.filter(
//         (doc) => doc.descripcion.trim() === descripcion.trim() && doc.idconvocatoria === idconvocatoria
//       );
//       console.log(existe.length, "este documento si existe");
//       if (existe.length > 0) {
//         for (var i in convocatoriaexist.dataValues.documentos) {
//           console.log(
//             convocatoriaexist.dataValues.documentos[i].descripcion,
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria,
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id
//           );
//           if (
//             convocatoriaexist.dataValues.documentos[i].descripcion.trim() === descripcion &&
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria === idconvocatoria &&
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id === tipo_documento_id
//           ) {
//             convocatoriaexist.dataValues.documentos[i].url_documento = url_documento;
//             convocatoriaexist.dataValues.documentos[i].tipo_documento = tipo_documento;
//             convocatoriaexist.dataValues.documentos[i].activo = activo;
//             convocatoriaexist.dataValues.documentos[i].fecha_modificacion = fecha_modificacion;
//             await Convocatoria.update(
//               {
//                 documentos: convocatoriaexist.dataValues.documentos,
//               },
//               {
//                 where: {
//                   idconvocatorias: idconvocatoria,
//                 },
//               }
//             );
//             await Documentos.update(
//               {
//                 url_documento,
//                 tipo_documento,
//                 activo,
//                 fecha_modificacion,
//               },
//               {
//                 where: {
//                   id: convocatoriaexist.dataValues.documentos[i].id,
//                 },
//               }
//             );
//           }
//         }
//         return res.json({
//           mensaje: "Proceso completado",
//           data: convocatoriaexist.dataValues.documentos,
//         });
//       }
//       console.log("este doncumento no existe y se va a crearlo");
//       return guardarDocumentosAdministrativos(req, res);
//     }
//     return guardarDocumentosTecnicos(req, res);
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
// }

// export async function guardarDocumentosConvocatoria(req, res) {
//   let fecha_creacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, nombre, tipo_documento, tipo_documento_id, descripcion, activo, url_documento } = req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     const nuevoDocumento = await Documentos.create({
//       idconvocatoria,
//       tipo_documento,
//       tipo_documento_id,
//       activo,
//       nombre,
//       url_documento,
//       descripcion,
//       fecha_creacion,
//     });

//     let id = nuevoDocumento.dataValues.id;
//     idconvocatoria = nuevoDocumento.dataValues.idconvocatoria;
//     tipo_documento = nuevoDocumento.dataValues.tipo_documento;
//     tipo_documento_id = nuevoDocumento.dataValues.tipo_documento_id;
//     activo = nuevoDocumento.dataValues.activo;
//     url_documento = nuevoDocumento.dataValues.url_documento;
//     descripcion = nuevoDocumento.dataValues.descripcion;
//     nombre = nuevoDocumento.dataValues.nombre;
//     fecha_creacion = nuevoDocumento.dataValues.fecha_creacion;

//     if (convocatoriaexist.dataValues.documentos === null) {
//       var documentos = [
//         {
//           id,
//           idconvocatoria,
//           nombre,
//           tipo_documento_id,
//           tipo_documento,
//           activo,
//           url_documento,
//           descripcion,
//           fecha_creacion,
//         },
//       ];
//     } else {
//       var documentos = [
//         ...convocatoriaexist.dataValues.documentos,
//         {
//           id,
//           idconvocatoria,
//           nombre,
//           tipo_documento,
//           tipo_documento_id,
//           activo,
//           url_documento,
//           descripcion,
//           fecha_creacion,
//         },
//       ];
//     }

//     const convocatorias = await Convocatoria.update(
//       {
//         documentos,
//       },
//       {
//         where: {
//           idconvocatorias: idconvocatoria,
//         },
//       }
//     );

//     return res.json({
//       mensaje: "Proceso completado",
//       data: documentos,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
// }

// export async function editarDocumentosConvocatoria(req, res) {
//   let fecha_modificacion = moment().format("YYYY-MM-DD");
//   let { idconvocatoria, nombre, tipo_documento, tipo_documento_id, descripcion, activo, url_documento } = req.body;

//   const errores = validationResult(req);

//   if (!errores.isEmpty()) {
//     return res.status(400).json({
//       mensaje: errores.array(),
//     });
//   }

//   try {
//     const convocatoriaexist = await Convocatoria.findOne({
//       where: {
//         idconvocatorias: idconvocatoria,
//       },
//     });

//     if (!convocatoriaexist) {
//       return res.status(400).json({
//         mensaje: "Convocatoria no existe",
//         data: {},
//       });
//     }

//     console.log(convocatoriaexist, "esta es la convocatoria");

//     if (convocatoriaexist.dataValues.documentos !== null) {
//       let existe = convocatoriaexist.dataValues.documentos.filter(
//         (doc) => doc.descripcion.trim() === descripcion.trim() && doc.idconvocatoria === idconvocatoria
//       );
//       console.log(existe.length, "este documento si existe");
//       if (existe.length > 0) {
//         for (var i in convocatoriaexist.dataValues.documentos) {
//           console.log(
//             convocatoriaexist.dataValues.documentos[i].descripcion,
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria,
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id
//           );
//           if (
//             convocatoriaexist.dataValues.documentos[i].descripcion.trim() === descripcion &&
//             convocatoriaexist.dataValues.documentos[i].idconvocatoria === idconvocatoria &&
//             convocatoriaexist.dataValues.documentos[i].tipo_documento_id === tipo_documento_id
//           ) {
//             convocatoriaexist.dataValues.documentos[i].url_documento = url_documento;
//             convocatoriaexist.dataValues.documentos[i].nombre = nombre;
//             convocatoriaexist.dataValues.documentos[i].tipo_documento = tipo_documento;
//             convocatoriaexist.dataValues.documentos[i].activo = activo;
//             convocatoriaexist.dataValues.documentos[i].fecha_modificacion = fecha_modificacion;
//             await Convocatoria.update(
//               {
//                 documentos: convocatoriaexist.dataValues.documentos,
//               },
//               {
//                 where: {
//                   idconvocatorias: idconvocatoria,
//                 },
//               }
//             );
//             await Documentos.update(
//               {
//                 url_documento,
//                 tipo_documento,
//                 nombre,
//                 activo,
//                 fecha_modificacion,
//               },
//               {
//                 where: {
//                   id: convocatoriaexist.dataValues.documentos[i].id,
//                 },
//               }
//             );
//           }
//         }
//         return res.json({
//           mensaje: "Proceso completado",
//           data: convocatoriaexist.dataValues.documentos,
//         });
//       }
//       console.log("este doncumento no existe y se va a crearlo");
//       return guardarDocumentosAdministrativos(req, res);
//     }
//     return guardarDocumentosConvocatoria(req, res);
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: "Problemas en la conexion a la base de datos",
//       data: {},
//     });
//   }
//}

export async function consultarDocumentos(req, res) {
  try {
    const documentos = await Documentos.findAll();
    res.json({
      data: documentos,
    });
  } catch (error) {
    console.log("error en la peticion", error);
    res.status(500).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function consultarDocumento(req, res) {
  try {
    const { id } = req.params;
    console.log("documento", id);
    const documento = await Documentos.findAll({
      where: {
        id_convocatoria: id,
      },
    });
    res.json({
      mensaje: "Proceso completado",
      data: documento,
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Proceso no se completo",
      data: {},
    });
  }
}

export async function consultarTiposDocumento(req, res) {
  try {
    const tiposdocumentos = await TiposDocumentos.findAll();
    res.json({
      data: tiposdocumentos,
    });
  } catch (error) {
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
