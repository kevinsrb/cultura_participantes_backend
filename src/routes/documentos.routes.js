import { Router } from "express";
const router = Router();
import {
  // consultarDocumentos,
  // consultarDocumento,
  // guardarDocumentosAdministrativos,
  // guardarDocumentosTecnicos,
  consultarTiposDocumento,
  // editarDocumentosAdministrativos,
  // guardarDocumentosConvocatoria,
  // editarDocumentosTecnicos,
  // editarDocumentosConvocatoria,
  guardarArchivo,
  consultarArchivos,
} from "../controllers/documentos.controller";
import { check } from "express-validator";

//  /api/documentos/ RUTA PRINCIPAL

// router.post(
//   "/documentosAdministrativos",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   guardarDocumentosAdministrativos
// );
// router.post(
//   "/documentosAdministrativos/editar",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   editarDocumentosAdministrativos
// );
// router.post(
//   "/documentosTecnicos",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   guardarDocumentosTecnicos
// );
// router.post(
//   "/documentosTecnicos/editar",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   editarDocumentosTecnicos
// );
// router.post(
//   "/documentosConvocatorias",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   guardarDocumentosConvocatoria
// );
// router.post(
//   "/documentosConvocatorias/editar",
//   [check("idconvocatoria", "El id de la convocatoria es obligatorio").not().isEmpty()],
//   editarDocumentosConvocatoria
// );
router.post("/guardarArchivo", guardarArchivo);
router.get("/consultarArchivos/:filename", consultarArchivos);
router.get("/tiposdocumentos/", consultarTiposDocumento);
// router.get("/:id", consultarDocumento);
// router.get("/", consultarDocumentos);

export default router;
