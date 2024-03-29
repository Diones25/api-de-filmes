import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from '../../../components/Banner/Banner.js';
import ScaleLoader from 'react-spinners/ScaleLoader'
import "../Movie.css";

import InputSearch from "../../../components/InputSearch/InputSearch.js";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MoviesPoster = () => {
  const [moviesPoster, setMoviesPoster] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/movie/now_playing")
      .then((response) => {
        setMoviesPoster(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Banner />
      <div className="bgContainer" style={{ background: "#F5F5F5" }}>
        <Container className="pt-5">
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <InputSearch />
            </Col>
          </Row>

          {loading && (
            <>
              <div
                className="sweet-loading"
                style={{ position: "relative", top: "20px", textAlign: "center", marginBottom: '60px' }}
              >
                <ScaleLoader color="#48dbfb" css={override} size={80} />
              </div>
            </>
          )}

          {moviesPoster &&
            <Row>
              {moviesPoster.map((item, index) => (
                <Col className="col my-2 md-4 lg-3" key={index}>
                  <Link id="Link" to={`/movie/${item.id}`}>
                    <Card id="card" className="mb-4">
                      <Card.Img
                        id="cardImg"
                        variant="top"
                        src={`${`https://www.themoviedb.org/t/p/w220_and_h330_face/`}.${
                          item.poster_path
                        }`}
                      />
                      <Card.Body id="cardBody">
                        <div
                          className={`progress-circle over50 p${
                            item.vote_average * 10
                          }`}
                        >
                          <span className="number">{item.vote_average * 10}</span>
                          <span className="percent">%</span>
                          <div className="left-half-clipper">
                            <div className="first50-bar"></div>
                            <div className="value-bar"></div>
                          </div>
                        </div>
                        <Card.Title className="title">{item.title}</Card.Title>
                        <Card.Text className="date">
                          {item.release_date}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          }
        </Container>
      </div>
    </>
  );
};

export default MoviesPoster;
