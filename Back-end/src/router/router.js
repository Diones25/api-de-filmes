import { Router }  from "express";
import themoviedbController from '../controllers/themoviedbController.js';

const router = Router();

router.get('/filmes/populares', themoviedbController.getFilmesPopulares);
router.get('/filme/populares/:movie_id', themoviedbController.getDetalheFilmeId);
router.get('/search/movie', themoviedbController.getSearchFilme);
router.get('/series/populares', themoviedbController.getSeriesPopulares);
router.get('/series/populares/:tv_id', themoviedbController.getSeriesPopularesId);
router.get('/search/series', themoviedbController.getSearchSeries);
router.get('/pessoas/populares', themoviedbController.getPessoasPopulares);
router.get('/pessoas/populares/:person_id', themoviedbController.getPessoasPopularesId);
router.get('/search/pessoas', themoviedbController.getSearchPessoas);

export default router;