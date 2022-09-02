import api from "../service/api.js";

const getFilmesPopulares = async (req, res) => {
  await api
    .get(`/movie/popular`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.release_date;

        data = new Date(data);
        var date = data.getDate() + 1;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          title: dado.title,
          release_date: `${date} de ${month} de ${year}`,
        };
      });
      
      console.log(retornoEsperado);
      return res.status(200).json(retornoEsperado);
    })
    .catch(() => {
      return res.status(400).json({ message: "Filmes populares não encontrado!" });
    });
};

const getDetalheFilmeId = async (req, res) => {
  const id = req.params.id;

  await api
    .get(`/movie/${id}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Filmes não encontrado!" });
    });
};

const getFilmesEmCartaz = async (req, res) => {
  await api
    .get(`/movie/now_playing`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Filmes em cartaz não encontrado!" });
    });
};

const getFilmesProximasEstreias = async (req, res) => {
  await api
    .get(`/movie/upcoming`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Próximas estréias não encontrado!" });
    });
};

const getFilmesBemAvaliados = async (req, res) => {
  await api
    .get(`/movie/top_rated`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Próximas estréias não encontrado!" });
    });
};

const getDatasLancamento = async(req, res) => {
  const id = req.params.id;

  await api
    .get(`/movie/${id}/release_dates`)
    .then((response) => {
      let data = response.data.results[40].release_dates[1].release_date;

      data = new Date(data);
      var date = data.getDate() + 1;
      var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][data.getMonth()];
      var year = data.getFullYear();

      let retornoEsperado = {
        iso: response.data.results[40].iso_3166_1,
        certification: response.data.results[40].release_dates[1].certification,
        release_date: `${date}/${month}/${year}`,
        ano: `${year}`
      }

      return res.status(200).json(retornoEsperado);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Data do filme não encontrado!" });
    });  
}

const getSearchFilme = async (req, res) => {
  const query = req.query["query"];

  await api
    .get(`/search/movie?query=${query}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Filme não encontrado!" });
    });
};

const getSeriesPopulares = async (req, res) => {
  await api
    .get(`/tv/popular`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries populares não encontrado!" });
    });
};

const getSeriesPopularesId = async (req, res) => {
  const tv_id = req.params.tv_id;

  await api
    .get(`/tv/${tv_id}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries populares ID não encontrado!" });
    });
};

const getSearchSeries = async (req, res) => {
  const query = req.query["query"];

  await api
    .get(`/search/tv?query=${query}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Serie não encontrado!" });
    });
};

const getPessoasPopulares = async (req, res) => {
  await api
    .get(`/person/popular`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Pessoas populares não encontrado!" });
    });
};

const getPessoasPopularesId = async (req, res) => {
  const person_id = req.params.person_id;

  await api
    .get(`/person/${person_id}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Pessoas populares ID não encontrado!" });
    });
};

const getSearchPessoas = async (req, res) => {
  const query = req.query["query"];

  await api
    .get(`/search/person?query=${query}`)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Pessoa não encontrado!" });
    });
};

export default {
  getFilmesPopulares,
  getFilmesEmCartaz,
  getFilmesProximasEstreias,
  getFilmesBemAvaliados,
  getDetalheFilmeId,
  getDatasLancamento,
  getSearchFilme,
  getSeriesPopulares,
  getSeriesPopularesId,
  getSearchSeries,
  getPessoasPopulares,
  getPessoasPopularesId,
  getSearchPessoas,
};
