import { Router }  from "express";
import themoviedbController from '../controllers/themoviedbController.js';

const router = Router();

router.get('/movie/:id', themoviedbController.getDetalheFilmeId);

export default router;