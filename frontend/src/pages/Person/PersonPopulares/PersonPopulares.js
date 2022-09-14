import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from '../../../components/Banner/Banner.js';
import ScaleLoader from 'react-spinners/ScaleLoader'
import "./PersonPopulares.css";

import InputSearch from "../../../components/InputSearch/InputSearch.js";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Person = () => {
  const [person, setMoviePerson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/person/popular")
      .then((response) => {
        setMoviePerson(response.data.results);
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

          {person &&
            <Row>
                <h1>Pessoas Populares</h1>
                {person.map((item, index) => (
                    <Col className="col my-2 md-4 lg-3" key={index}>
                    <Link id="Link" to={`/person/${item.id}`}>
                        <Card id="cardPerson" className="mb-4">
                        <Card.Img
                            id="cardImgPerson"
                            variant="top"
                            src={`${`https://www.themoviedb.org/t/p/w220_and_h330_face/`}.${
                            item.profile_path
                            }`}
                        />
                        <Card.Body id="cardBody">                        
                            <Card.Title className="title text-center">{item.name}</Card.Title>
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

export default Person;
