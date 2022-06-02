import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import "./MoviesPopulares.css";

import InputSearch from "../../InputSearch/InputSearch.js";

const MoviesPopulares = () => {
  const [moviePopulares, setMoviePopulares] = useState([]);

  useEffect(() => {
    api
      .get("/filmes/populares")
      .then((response) => {
        console.log(response.data.results);
        setMoviePopulares(response.data.results);
        //setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    //title, release_date, vote_average, poster_path
    <>
      <div className="bgContainer" style={{ background: "#F5F5F5" }}>
        <Container className="pt-5">
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <InputSearch />
            </Col>
          </Row>

          <Row>
            {moviePopulares.map((item, index) => (
              <div className="col my-2 md-4 lg-3" key={index}>
                <Link id="Link" to={`/filme/populares/${item.id}`}>
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
                        {format(
                          new Date(item.release_date),
                          `${`d`}${" MMMM  YYY"}`,
                          { locale: ptBR }
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MoviesPopulares;
