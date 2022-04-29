const res = require("express/lib/response");
const api = require("../service/api");

const getFilmesRecentes = async (req, res) => {
    await api.get(`/movie/popular`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);    
    });
}

const getDetalheFilme = async (req, res) => {
    const movie_id = req.params.movieId;

    await api.get(`/movie/${movie_id}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);
    });
}

module.exports = {
    getFilmesRecentes,
    getDetalheFilme
}
