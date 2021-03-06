import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import api from '../../../service/api.js';
import  Carousel from 'react-grid-carousel'

import "./MovieDetails.css";

import facebook from "../../../assets/img/Facebook.png";
import instagram from "../../../assets/img/instagram.png";
import link from "../../../assets/img/link.png";
import twitter from "../../../assets/img/twiter.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieDeteLancamento, setmovieDeteLancamento] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/filme/populares/${id}`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    api
      .get(`/filme/${id}/lancamento`)
      .then((response) => {
        setmovieDeteLancamento(response.data);
        console.log(response.data)        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${`https://www.themoviedb.org/t/p/w220_and_h330_face/`}.${movieDetails.backdrop_path })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          position: "relative",
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
                      src={`${`https://www.themoviedb.org/t/p/w220_and_h330_face/`}.${movieDetails.poster_path }`}
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <div className="title">
                      <h2>
                        {movieDetails.title} <span className="ano">({movieDeteLancamento.ano})</span>
                      </h2>
                    </div>
                    <div className="detais">
                      <span className="classificacao">{movieDeteLancamento.certification}</span>
                      <span className="date">{movieDeteLancamento.release_date} ({movieDeteLancamento.iso}) </span>
                      <span>
                        <a>A????o, </a>
                        <a>Aventura, </a>
                        <a> Fic????o cient??fica</a>
                      </span>
                      <span className="duration">2h 29m</span>
                    </div>
                    <div className="mt-3">
                      <div className="popularity">
                        <ul>
                          <li className="d-flex">
                            <div className="rating">
                              <div
                                className={`progress-circle over50 p${
                                  movieDetails.vote_average * 10
                                }`}
                              >
                                <span className="number">
                                  {movieDetails.vote_average * 10}
                                </span>
                                <span className="percent">%</span>
                                <div className="left-half-clipper">
                                  <div className="first50-bar"></div>
                                  <div className="value-bar"></div>
                                </div>
                              </div>
                            </div>
                            <div className="avaliacao">
                              Avalia????o
                              <br />
                              dos
                              <br />
                              usu??rios
                            </div>
                            <div className="triller">Reproduzir trailer</div>
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
                <strong>T??tulo original</strong>
              </span>
              <span className="mb-3">{movieDetails.original_title}</span>
            </div>
          </Col>

          <Col lg={2}>
            <div className="d-flex flex-column">
              <span>
                <strong>Situa????o</strong>
              </span>
              <span className="mb-3">Lan??ado</span>              
            </div>
          </Col>

          <Col lg={2}>

            <div className="d-flex flex-column">
              <span>
                <strong>Idioma original</strong>
              </span>
              <span className="mb-3">{movieDetails.original_language}</span>
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
