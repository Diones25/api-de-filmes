const { Router }  = require("express");
const themoviedbController = require('../controllers/themoviedbController.js');

const router = Router();

router.get('/filmes/populares', themoviedbController.getFilmesPopulares);
router.get('/filme/detalhes/:movieId', themoviedbController.getDetalheFilme);

module.exports = router;