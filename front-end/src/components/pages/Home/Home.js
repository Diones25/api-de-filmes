import { 
  Container,
  Row,
  Col
} from "react-bootstrap";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import CardMovies from "../../CardMovies/CardMovies.js";
import InputSearch from '../../InputSearch/InputSearch.js';
import './Home.css';

const Home = () => {
  return (
    <>      
      <div className="bgContainer">
      <Container className="pt-5">
        
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <InputSearch />
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <CardMovies />
          </Col>
          <Col md={3}>
            <CardMovies />
          </Col>
          <Col md={3}>
            <CardMovies />
          </Col>
          <Col md={3}>
            <CardMovies />
          </Col>
        </Row>
      </Container>   

      </div>
    </>
  );
};

export default Home;
