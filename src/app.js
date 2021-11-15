import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger_output.json'
import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import fileupload from 'express-fileupload';

// IMPORT ROUTE
import participantesRoutes from './routes/participantes.routes'
import participantesAgregadosRoutes from './routes/participantesAgregados.routes'
import postulacionesRoutes from './routes/postulaciones.routes'


//  APP
const  app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(cors())
app.use(fileupload());

// ROUTES
app.use('/api/participantes', participantesRoutes);
app.use('/api/partipantesAgregados', participantesAgregadosRoutes);
app.use('/api/postulaciones', postulacionesRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



export default app;