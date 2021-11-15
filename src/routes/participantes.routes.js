import { Router } from 'express'
const router = Router();
import { crearParticipante, 
    obtenerIdParticipante,
    consultarParticipantes, 
    obtenerParticipante, 
    editarParticipante, 
    guardarArchivo,
    consultarArchivos,
    eliminarArchivo,
    consultarLinks,
    guardarPostulacionParticipantes,
    obtenerPostulacionParticipante,
    actualizarEstadoSubsanacionDocumento
} from '../controllers/participantes.controllers'


//  /api/personaNatural/ RUTA PRINCIPAL

router.post('/', crearParticipante);
router.post('/guardarArchivo', guardarArchivo);
router.post('/guardarPostulacionParticipantes/:idParticipante', guardarPostulacionParticipantes);
router.put('/:usuario_id', editarParticipante);
router.delete('/eliminarArchivo/:filename', eliminarArchivo);
router.put('/actualizarEstadoSubsanacionDocumento/:idParticipante', actualizarEstadoSubsanacionDocumento);
router.get('/:idParticipante', obtenerParticipante);
router.get('/obtenerIdParticipante', obtenerIdParticipante);
router.get('/consultarArchivos/:idParticipante', consultarArchivos);
router.get('/consultarLinks/:idParticipante', consultarLinks);
router.get('/obtenerPostulacionParticipante/:idParticipante', obtenerPostulacionParticipante);
router.get('/', consultarParticipantes);


export default router;