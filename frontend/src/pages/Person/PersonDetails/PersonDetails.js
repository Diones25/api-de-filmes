import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from '../../../service/api.js';

import "./PersonDetails.css";

const PersonDetails = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState([]);
  const [personImages, setPersonImages] = useState([]);

  useEffect(() => {
    api
      .get(`/person/${id}/tagged_images`)
      .then((response) => {       
        setPersonImages(response.data);      
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
        <div id="DetailsContainerPerson" className="my-5">
          <Container>
            <Row>
              <Col md={12}>
                <Card id="card-container" className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row py-5">
                  <div id="CardContainerDetailsPerson" className="m-auto m-sm-auto m-md-auto">
                    <Card.Img
                      className="PosterImage"
                      variant="top"
                      src={ `https://www.themoviedb.org/t/p/w220_and_h330_face/.${personDetails.profile_path }` }
                    />
                    <div>
                      teste
                    </div>
                    <div>
                      teste2
                    </div>
                  </div>
                  <Card.Body className="cardBodyPerson">
                    <div className="title">
                      <h2 className=" text-sm-center text-md-center text-lg-start text-xl-start">
                        {personDetails.name}
                      </h2>                      
                    </div>
                    <div className="detais text-sm-center text-md-center text-lg-start text-xl-start">
                      <h5>Biografia</h5>
                      <span>{personDetails.biography}</span>                      
                    </div>
                    
                    <section class="full_wrapper">
                      <div id="known_for">
                        <h3 dir="auto">Conhecido(a) por</h3>
                        <div id="known_for_scroller" class="scroller_wrap should_fade is_fading">
                          <ul class="horizontal_media_list scroller">
                            {personImages &&
                              personImages.map((item, index) => (
                                <>
                                  <li class="account_adult_true item_adult_false" key={item.id}>
                                    <div class="image">
                                      <Link id="Link" to={`/movie/${item.movieId}`}>
                                          <img loading="lazy" class="poster" src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${item.poster_path}`}  alt="" />
                                      </Link>
                                    </div>
                                    <p>
                                      <a class="title" href="/movie/315635"><bdi>{item.title}</bdi></a>
                                    </p>
                                  </li>
                                </>
                              ))                      
                            }                                                                  
                          </ul>
                        </div>
                      </div>
                    </section>

                    
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
