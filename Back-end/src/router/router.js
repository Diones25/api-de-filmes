import { Router }  from "express";
import themoviedbController from '../controllers/themoviedbController.js';

const router = Router();

router.get('/filmes/populares', themoviedbController.getFilmesPopulares);
router.get('/filmes/discover', themoviedbController.getDescobrirFilmes);
router.get('/filme/detalhes/:movieId', themoviedbController.getDetalheFilme);
router.get('/search/movie', themoviedbController.getSearchFilme);

export default router;