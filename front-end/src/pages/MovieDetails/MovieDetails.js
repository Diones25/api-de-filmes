import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import api from '../../service/api.js';

import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    api
      .get(`/filme/populares/${id}`)
      .then((response) => {

        let data = response.data.release_date;

        data = new Date(data);
        var date = data.getDate() + 1;
        var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][data.getMonth()];
        var year = data.getFullYear();

        const runtime = response.data.runtime; 
        let hora = runtime / 60;
        let minutos =  runtime % 60;
        let duracao = `${Math.floor(hora)}h${minutos}m`
        
        const resposta = {
          backdrop_path: response.data.backdrop_path,    
          budget: response.data.budget,
          genres: response.data.genres,
          homepage: response.data.homepage,    
          original_language: response.data.original_language,
          original_title: response.data.original_title,
          overview: response.data.overview,
          poster_path: response.data.poster_path,
          release_date: `${date}/${month}/${year}`,
          release_dateAno: `${year}`,
          revenue: response.data.revenue,
          runtime: duracao,
          status: response.data.status,
          tagline: response.data.tagline,
          title: response.data.title,    
          vote_average: response.data.vote_average
        }        
        setMovieDetails(resposta);        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/w1920_and_h800_face/`}.${movieDetails.backdrop_path })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          position: "relative",
          objectFit: 'cover'
        }}
      >
        <div id="DetailsContainer" className="my-5">
          <Container>
            <Row>
              <Col md={12}>
                <Card id="card-container" className="py-5">
                  <div id="CardContainerDetails">
                    <Card.Img
                      className="PosterImage"
                      variant="top"
                      src={ `https://www.themoviedb.org/t/p/w220_and_h330_face/.${movieDetails.poster_path }` }
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <div className="title">
                      <h2>
                        {movieDetails.title} <span className="ano">({movieDetails.release_dateAno})</span>
                      </h2>
                    </div>
                    <div className="detais">
                      <span className="classificacao">Data de lançamento:</span>
                      <span className="date">{movieDetails.release_date}</span>
                      <span className="duration">Duração: {movieDetails.runtime}</span>
                    </div>
                    <div className="mt-3">
                      <div className="popularity">
                        <ul>
                          <li className="d-flex">
                            <div className="rating">
                              <div
                                className={`progress-circle over50 p${
                                  (movieDetails.vote_average * 10).toFixed(0)
                                }`}
                              >                                
                                <span className="number">
                                  {(movieDetails.vote_average * 10).toFixed(0)}
                                </span>
                                <span className="percent">%</span>
                                <div className="left-half-clipper">
                                  <div className="first50-bar"></div>
                                  <div className="value-bar"></div>
                                </div>
                              </div>
                            </div>
                            <div className="avaliacao">
                              Avaliação
                              <br />
                              dos
                              <br />
                              usuários
                            </div>                            
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header_info">
                      <h3 className="tagline">{movieDetails.tagline}</h3>
                      <h3>Sinopse</h3>
                      <div className="tagline">
                        <p>{movieDetails.overview}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="mb-5">
        <Row>          
          <Col lg={2}>
            <div className="d-flex flex-column">
              <span>
                <strong>Título original</strong>
              </span>
              <span className="mb-3">{movieDetails.original_title}</span>
            </div>
          </Col>

          <Col lg={2}>
            <div className="d-flex flex-column">
              <span>
                <strong>Situação</strong>
              </span>
              <span className="mb-3">{movieDetails.status ? 'Lançado' : 'Em lançamento' }</span>              
            </div>
          </Col>

          <Col lg={2}>

            <div className="d-flex flex-column">
              <span>
                <strong>Idioma original</strong>
              </span>
              <span className="mb-3">{movieDetails.original_language ? 'Inglês' : 'Portugês'}</span>
            </div>
          </Col>

          <Col lg={2}>
            <div className="d-flex flex-column">              
              <span>
                <strong>Orçamento</strong>
              </span>
              <span>{movieDetails.budget}</span>
            </div>
          </Col>

          <Col lg={2}>
            <div className="d-flex flex-column">              
              <span>
                <strong>Receita</strong>
              </span>
              <span>{movieDetails.revenue}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
