import api from "../service/api.js";

const getFilmesPopulares = async (req, res) => {
  const page = req.query['page'];
  console.log(page)
  await api
    .get(`/movie/popular?page=${page}`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.release_date;
        let dia = data.split('-')[2];

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          title: dado.title,
          release_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
        }
      );
    })
    .catch(() => {
      return res.status(400).json({ message: "Filmes populares não encontrado!" });
    });
};

const getFilmesProximasEstreias = async (req, res) => {

  const page = req.query['page'];
  await api
    .get(`/movie/upcoming?page=${page}`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.release_date;
        let dia = data.split('-')[2];

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          title: dado.title,
          release_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Próximas estréias não encontrado!" });
    });
};

const getDetalheFilmeId = async (req, res) => {
  const id = req.params.id;
  await api
    .get(`/movie/${id}`)
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Filmes não encontrado!" });
    });
};

const getFilmesEmCartaz = async (req, res) => {
  const page = req.query['page'];
  await api
    .get(`/movie/now_playing?page=${page}`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.release_date;
        let dia = data.split('-')[2];

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          title: dado.title,
          release_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Filmes em cartaz não encontrado!" });
    });
};

const getFilmesBemAvaliados = async (req, res) => {
  const page = req.query['page'];
  await api
    .get(`/movie/top_rated?page=${page}`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.release_date;
        let dia = data.split('-')[2];

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          title: dado.title,
          release_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Próximas estréias não encontrado!" });
    });
};

const getSearchFilme = async (req, res) => {
  const query = req.query["query"];

  await api
    .get(`/search/movie?query=${query}`)
    .then((response) => {
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
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.first_air_date;
        let dia = data.split('-')[2];        

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          name: dado.name,
          first_air_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries populares não encontrado!" });
    });
};

const getSeriesExibicao = async (req, res) => {
  await api
    .get(`/tv/airing_today`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.first_air_date;
        let dia = data.split('-')[2];        

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          name: dado.name,
          first_air_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results 
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries em exibição não encontrado!" });
    });
};

const getSeriesNoAr = async (req, res) => {
  await api
    .get(`/tv/on_the_air`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.first_air_date;
        let dia = data.split('-')[2];        

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          name: dado.name,
          first_air_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results 
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries em exibição não encontrado!" });
    });
};

const getSeriesTop_rated = async (req, res) => {
  await api
    .get(`/tv/top_rated`)
    .then((response) => {
      let dados = response.data.results;

      let retornoEsperado = dados.map((dado) => {
        let data = dado.first_air_date;
        let dia = data.split('-')[2];        

        data = new Date(data);
        var day = dia;
        var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        var year = data.getFullYear();

        return {
          id: dado.id,
          poster_path: dado.poster_path,
          vote_average: dado.vote_average,
          name: dado.name,
          first_air_date: `${day} de ${month} de ${year}`,          
        };
      });

      return res.status(200).json(
        { 
          page: response.data.page,
          results: retornoEsperado,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results 
        }
      );
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Séries em exibição não encontrado!" });
    });
};

const getSeriesPopularesId = async (req, res) => {
  const id = req.params.id;

  await api
    .get(`/tv/${id}`)
    .then((response) => {
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
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res.status(400).json({ message: "Serie não encontrado!" });
    });
};

const getPessoasPopulares = async (req, res) => {
  const page = req.query['page'];
  await api
    .get(`/person/popular?page=${page}`)
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch(() => {
      return res
        .status(400)
        .json({ message: "Pessoas populares não encontrado!" });
    });
};

const getPessoasPopularesId = async (req, res) => {
  const id = req.params.id;

  await api
    .get(`/person/${id}`)
    .then((response) => {
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
  getSearchFilme,
  getSeriesPopulares,
  getSeriesExibicao,
  getSeriesNoAr,
  getSeriesTop_rated,
  getSeriesPopularesId,
  getSearchSeries,
  getPessoasPopulares,
  getPessoasPopularesId,
  getSearchPessoas,
};
