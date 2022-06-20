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
import spider from "../../../assets/img/spider.jpg";
import poster from '../../../assets/img/poster.jpg'

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/filme/populares/${id}`)
      .then((response) => {
        console.log(response.data);
        setMovieDetails(response.data);
        setLoading(false);
      },[id])
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <Container fluid>
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
                        {movieDetails.title}{" "}
                        <span className="ano">(2022)</span>
                      </h2>
                    </div>
                    <div className="detais">
                      <span className="classificacao">12</span>
                      <span className="date">16/12/2021 (BR)</span>
                      <span>
                        <a>Ação, </a>
                        <a>Aventura, </a>
                        <a> Ficção científica</a>
                      </span>
                      <span className="duration">2h 29m</span>
                    </div>
                    <div className="mt-3">
                      <div className="popularity">
                        <ul>
                          <li className="d-flex">
                            <div className="rating">
                              <div className={`progress-circle over50 p${movieDetails.vote_average * 10}`}>
                                <span className="number">{movieDetails.vote_average * 10}</span>
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
                            <div className="triller">Reproduzir trailer</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header_info">
                      <h3 className="tagline">{movieDetails.tagline}</h3>
                      <h3>Sinopse</h3>
                      <div className="tagline">
                        <p>
                          {movieDetails.overview}
                        </p>
                      </div>

                      <ul className="people">
                        <li className="profile">
                          <p>
                            <a id="name" href="/person/7625-steve-ditko">
                              Steve Ditko
                            </a>
                          </p>
                          <p id="character">Characters</p>
                        </li>

                        <li className="profile">
                          <p>
                            <a id="name" href="/person/7624-stan-lee">
                              Stan Lee
                            </a>
                          </p>
                          <p id="character">Characters</p>
                        </li>

                        <li className="profile">
                          <p>
                            <a id="name" href="/person/1293994-jon-watts">
                              Jon Watts
                            </a>
                          </p>
                          <p id="character">Director</p>
                        </li>

                        <li className="profile">
                          <p>
                            <a id="name" href="/person/1246890-chris-mckenna">
                              Chris McKenna
                            </a>
                          </p>
                          <p id="character">Writer</p>
                        </li>

                        <li className="profile">
                          <p>
                            <a id="name" href="/person/1350918-erik-sommers">
                              Erik Sommers
                            </a>
                          </p>
                          <p id="character">Writer</p>
                        </li>
                      </ul>
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
          <Col lg={8} className="pb-3">
            <h3>Elenco principal</h3>
            <Carousel cols={6} rows={1} gap={10} loop>
              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item className="my-3">
                <Card style={{ width: "140px" }}>
                  <Card.Img
                    style={{ height: "160px" }}
                    variant="top"
                    src="https://picsum.photos/800/600?random=2"
                  />
                  <Card.Body className="mb-5" style={{ height: "97px" }}>
                    <Card.Title>Tom Holland</Card.Title>
                    <Card.Text>Peter Parker / Spider-Man</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={4}>
            <div className="social_links">
              <div className="facebook">
                <a
                  className="social_link"
                  title="Visitar Facebook"
                  href="https://www.facebook.com/SpiderManMovie"
                  target="_blank"
                  rel="noopener"
                  data-role="tooltip"
                >
                  <img src={facebook} />
                </a>
              </div>

              <div className="twitter">
                <a
                  className="social_link"
                  title=""
                  href="https://twitter.com/spidermanmovie"
                  target="_blank"
                  rel="noopener"
                  data-role="tooltip"
                >
                  <img src={twitter} />
                </a>
              </div>

              <div className="instagram">
                <a
                  className="social_link"
                  title="Visitar Instagram"
                  href="https://instagram.com/spidermanmovie/"
                  target="_blank"
                  rel="noopener"
                  data-role="tooltip"
                >
                  <img src={instagram} />
                </a>
              </div>

              <div className="homepage">
                <a
                  className="social_link"
                  title="Visitar página inicial"
                  href="https://www.marvel.com/movies/spider-man-no-way-home"
                  target="_blank"
                  rel="noopener"
                  data-role="tooltip"
                >
                  <img src={link} />
                </a>
              </div>
            </div>

            <div className="d-flex flex-column">
              <span>
                <strong>Título original</strong>
              </span>
              <span className="mb-3">Spider-Man: No Way Home</span>

              <span>
                <strong>Situação</strong>
              </span>
              <span className="mb-3">Lançado</span>

              <span>
                <strong>Idioma original</strong>
              </span>
              <span className="mb-3">Inglês</span>

              <span>
                <strong>Orçamento</strong>
              </span>
              <span className="mb-3">$200,000,000.00</span>

              <span>
                <strong>Receita</strong>
              </span>
              <span>$1,892,000,000.00</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
