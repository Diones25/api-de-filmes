import { Card } from "react-bootstrap";
import './CardMovies.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import Morbius from '../../assets/img/Morbius 1.png'

const CardMovies = () => {
  return (
    <>
      <Card id="card">
        <Card.Img id="cardImg" variant="top" src={Morbius} />
        <Card.Body id="cardBody">
          <Card.Title>Morbius</Card.Title>
          <Card.Text>
            30 de mar de 2022
          </Card.Text>
        </Card.Body>
      </Card>
      <br />      
    </>
  );
};

export default CardMovies;
