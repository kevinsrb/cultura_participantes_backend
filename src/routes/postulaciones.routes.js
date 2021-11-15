import { Router } from 'express'
const router = Router();
import { 
    crearPostulacion,
    consultarPostulaciones,
    cambiarEstadoPostulacion,
    cambiarTipoParticipantePostulacion,
    guardarLinksPostulacion,
    guardarUrlDocumentosTecnicosPostulacion,
    guardarUrlDocumentosAdministrativosPostulacion,
    guardarUrlDocumentosGeneralesPostulacion,
    actualizarNombrePropuesta,
    guardarDocumentosAdministrativos,
    guardarDocumentosGenerales,
    guardarDocumentosTecnicos,
    consultarDocumentosAdministrativos,
    consultarDocumentosTecnicos,
    consultarDocumentosGenerales
} from '../controllers/postulaciones.controller'


//  /api/personaNatural/ RUTA PRINCIPAL

router.post('/', crearPostulacion);
router.post('/documentos_administrativos/:id', guardarDocumentosAdministrativos);
router.post('/documentos_tecnicos/:id', guardarDocumentosTecnicos);
router.post('/documentos_generales/:id', guardarDocumentosGenerales);
router.put('/guardarLinksPostulacion/:id_postulacion', guardarLinksPostulacion);
router.put('/actualizarNombrePropuesta/', actualizarNombrePropuesta);
router.put('/cambiarTipoParticipantePostulacion', cambiarTipoParticipantePostulacion);
router.put('/cambiarEstadoPostulacion', cambiarEstadoPostulacion);
router.put('/guardarUrlDocumentosTecnicosPostulacion', guardarUrlDocumentosTecnicosPostulacion);
router.put('/guardarUrlDocumentosAdministrativosPostulacion', guardarUrlDocumentosAdministrativosPostulacion);
router.put('/guardarUrlDocumentosGeneralesPostulacion', guardarUrlDocumentosGeneralesPostulacion);
router.get("/consultarDocumentosAdministrativos/:id", consultarDocumentosAdministrativos);
router.get('/consultarDocumentosTecnicos/:id', consultarDocumentosTecnicos);
router.get("/consultarDocumentosGenerales/:id", consultarDocumentosGenerales);
router.get('/', consultarPostulaciones);



export default router;