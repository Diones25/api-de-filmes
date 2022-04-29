const { Router }  = require("express");
const themoviedbController = require('../controllers/themoviedbController.js');

const router = Router();

router.get('/filmes/populares', themoviedbController.getFilmesRecentes);
router.get('/filme/detalhes/:movieId', themoviedbController.getDetalheFilme);

module.exports = router;