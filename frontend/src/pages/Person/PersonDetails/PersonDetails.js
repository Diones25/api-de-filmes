import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import api from '../../../service/api.js';

import "./PersonDetails.css";

const PersonDetails = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState([]);

  useEffect(() => {
    api
      .get(`/person/${id}`)
      .then((response) => {       
        setPersonDetails(response.data);      
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div>
        <div id="DetailsContainer" className="my-5">
          <Container>
            <Row>
              <Col md={12}>
                <Card id="card-container" className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row py-5">
                  <div id="CardContainerDetails" className="m-auto m-sm-auto m-md-auto">
                    <Card.Img
                      className="PosterImage"
                      variant="top"
                      src={ `https://www.themoviedb.org/t/p/w220_and_h330_face/.${personDetails.profile_path }` }
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <div className="title">
                      <h2 className=" text-sm-center text-md-center text-lg-start text-xl-start">
                        {personDetails.name}
                      </h2>                      
                    </div>
                    <div className="detais text-sm-center text-md-center text-lg-start text-xl-start">
                      <h5>Biografia</h5>
                      <span>{personDetails.biography}</span>                      
                    </div>
                    <div className="header_info text-sm-center text-md-center text-lg-start text-xl-start">
                      <h4 className="text-center text-sm-center text-md-center text-lg-start text-xl-start">Conhecido(a) por</h4>
                      <div className="tagline px-4 px-lg-0 px-xl-0 text-justify text-sm-justify text-md-justify text-lg-start text-xl-start">
                        <p>{personDetails.overview}</p>
                      </div>
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

export default PersonDetails;
