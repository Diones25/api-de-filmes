import { Router }  from "express";
import themoviedbController from '../controllers/themoviedbController.js';

const router = Router();

router.get('/filmes/populares', themoviedbController.getFilmesPopulares);
router.get('/filmes/cartaz', themoviedbController.getFilmesEmCartaz);
router.get('/filmes/proximas/estreias', themoviedbController.getFilmesProximasEstreias);
router.get('/filmes/avaliados', themoviedbController.getFilmesBemAvaliados);
router.get('/filme/populares/:id', themoviedbController.getDetalheFilmeId);
router.get('/filme/:id/lancamento', themoviedbController.getDatasLancamento);
router.get('/search/movie', themoviedbController.getSearchFilme);
router.get('/series/populares', themoviedbController.getSeriesPopulares);
router.get('/series/populares/:tv_id', themoviedbController.getSeriesPopularesId);
router.get('/search/series', themoviedbController.getSearchSeries);
router.get('/pessoas/populares', themoviedbController.getPessoasPopulares);
router.get('/pessoas/populares/:person_id', themoviedbController.getPessoasPopularesId);
router.get('/search/pessoas', themoviedbController.getSearchPessoas);

export default router;