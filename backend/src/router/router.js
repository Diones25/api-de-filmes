import { Router }  from "express";
import themoviedbController from '../controllers/themoviedbController.js';

const router = Router();

router.get('/movie/popular', themoviedbController.getFilmesPopulares);
router.get('/movie/now_playing', themoviedbController.getFilmesEmCartaz);
router.get('/movie/upcoming', themoviedbController.getFilmesProximasEstreias);
router.get('/movie/top_rated', themoviedbController.getFilmesBemAvaliados);
router.get('/search/movie', themoviedbController.getSearchFilme);
router.get('/tv/popular', themoviedbController.getSeriesPopulares);
router.get('/tv/airing_today', themoviedbController.getSeriesExibicao);
router.get('/tv/on_the_air', themoviedbController.getSeriesNoAr);
router.get('/tv/top_rated', themoviedbController.getSeriesTop_rated);
router.get('/tv/:id', themoviedbController.getSeriesPopularesId);
router.get('/search/series', themoviedbController.getSearchSeries);
router.get('/pessoas/populares', themoviedbController.getPessoasPopulares);
router.get('/pessoas/populares/:person_id', themoviedbController.getPessoasPopularesId);
router.get('/search/pessoas', themoviedbController.getSearchPessoas);

export default router;