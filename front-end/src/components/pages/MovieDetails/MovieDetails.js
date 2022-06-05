import { Container, Row, Col, Card } from "react-bootstrap";

import "./MovieDetails.css";

import spider from "../../../assets/img/spider.jpg";
import poster from '../../../assets/img/poster.jpg'

const MovieDetails = () => {
  return (
    <>
      <div style={{ backgroundImage:`url(${poster})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", zIndex: "-1" }} >
        <div id="DetailsContainer" className="d-flex align-items-center my-5">        
          <Container fluid>
            <Row>
              <Col md={12}>
                <Card id="card-container">
                  <div id="CardContainerDetails">
                    <Card.Img
                      className="PosterImage"
                      variant="top"
                      src={spider}
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <div className="title">
                      <h2>
                        Homem-Aranha: Sem Volta Para Casa{" "}
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
                              <div
                                className={`progress-circle over50 p60`}
                              >
                                <span className="number">
                                  60
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
                            <div className="triller">Reproduzir trailer</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header_info">
                      <h3 class="tagline">O Multiverso está aberto.</h3>
                      <h3>Sinopse</h3>
                      <div class="tagline">
                        <p>
                          Peter Parker é desmascarado e não consegue mais separar
                          sua vida normal dos grandes riscos de ser um
                          super-herói. Quando ele pede ajuda ao Doutor Estranho,
                          os riscos se tornam ainda mais perigosos, e o forçam a
                          descobrir o que realmente significa ser o
                          Homem-Aranha...
                        </p>
                      </div>

                      <ul class="people">
                        <li class="profile">
                          <p>
                            <a id="name" href="/person/7625-steve-ditko">
                              Steve Ditko
                            </a>
                          </p>
                          <p id="character">Characters</p>
                        </li>

                        <li class="profile">
                          <p>
                            <a id="name" href="/person/7624-stan-lee">
                              Stan Lee
                            </a>
                          </p>
                          <p id="character">Characters</p>
                        </li>

                        <li class="profile">
                          <p>
                            <a id="name" href="/person/1293994-jon-watts">
                              Jon Watts
                            </a>
                          </p>
                          <p id="character">Director</p>
                        </li>

                        <li class="profile">
                          <p>
                            <a id="name" href="/person/1246890-chris-mckenna">
                              Chris McKenna
                            </a>
                          </p>
                          <p id="character">Writer</p>
                        </li>

                        <li class="profile">
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
    </>
  );
};

export default MovieDetails;
