import api from "../service/api.js";

const getFilmesPopulares = async (req, res) => {
    await api.get(`/movie/popular`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Filmes populares não encontrado!" });
    });
}

const getDescobrirFilmes = async (req, res) => {
    await api.get('/discover/movie').then((response) => {
        console.log(JSON.stringify(response.data))
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Filmes não encontrado!" });
    });
}

const getDetalheFilme = async (req, res) => {
    const movie_id = req.params.movieId;

    await api.get(`/movie/${movie_id}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Filmes não encontrado!" });
    });
}

const getSearchFilme = async (req, res) => {
    const query = req.query["query"];

    await api.get(`/search/movie?query=${query}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Filme não encontrado!" });
    });
}


export default {
    getFilmesPopulares,
    getDetalheFilme,
    getDescobrirFilmes,
    getSearchFilme
}
