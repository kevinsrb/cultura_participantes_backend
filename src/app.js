import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

// IMPORT ROUTE
import participantesRoutes from './routes/participantes.routes'
import participantesAgregadosRoutes from './routes/participantesAgregados.routes'

//  APP
const  app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(cors())

// ROUTES
app.use('/api/participantes', participantesRoutes);
app.use('/api/partipantesAgregados', participantesAgregadosRoutes);


export default app;