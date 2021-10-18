import { Router } from 'express'
const router = Router();
import { crearParticipantes, 
        consultarParctipantesAgregados, 
        consultarParctipanteAgregado, 
        eliminarParticipante,
        obtenerParticipantesByIdParticipante
} from '../controllers/participantesAgregados.controller'


//  /api/personaNatural/ RUTA PRINCIPAL

router.post('/', crearParticipantes);


router.delete('/:id', eliminarParticipante);

router.get('/participante/:id', obtenerParticipantesByIdParticipante);
router.get('/:id', consultarParctipanteAgregado);
router.get('/', consultarParctipantesAgregados);


export default router;