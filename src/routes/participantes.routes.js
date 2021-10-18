import { Router } from 'express'
const router = Router();
import { crearParticipante, obtenerIdParticipante, obtenerParticipante} from '../controllers/participantes.controllers'


//  /api/personaNatural/ RUTA PRINCIPAL

router.post('/', crearParticipante);
router.get('/:id', obtenerParticipante);
router.get('/obtenerIdParticipante', obtenerIdParticipante);



export default router;