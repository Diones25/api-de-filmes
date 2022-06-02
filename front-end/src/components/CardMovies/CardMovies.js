import { Card } from "react-bootstrap";
import './CardMovies.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import Morbius from '../../assets/img/Morbius 1.png'

const CardMovies = () => {
  return (
    <>
      <Card id="card" className="mb-5">
        <Card.Img id="cardImg" variant="top" src={Morbius} />
        <Card.Body id="cardBody">
          <div class="progress-circle over50 p70">
            <span class="number">66</span>
            <span class="percent">%</span>
            <div class="left-half-clipper">
              <div class="first50-bar"></div>
              <div class="value-bar"></div>
            </div>
          </div>
          <Card.Title>Morbius</Card.Title>
          <Card.Text>30 de mar de 2022</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardMovies;
