const { Router }  = require("express");
const themoviedbController = require('../controllers/themoviedbController.js');

const router = Router();

router.get('/filmes/recentes', themoviedbController.getFilmesRecentes);

module.exports = router;