import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import './Card.css';

export function Card() {
  return (
    <>
      <Card id="card" className="mb-4">
        <Card.Img
          id="cardImg"
          variant="top"
          src={`${`https://www.themoviedb.org/t/p/w220_and_h330_face/`}.${
            item.poster_path
          }`}
        />
        <Card.Body id="cardBody">
          <div className={`progress-circle over50 p${item.vote_average * 10}`}>
            <span className="number">{item.vote_average * 10}</span>
            <span className="percent">%</span>
            <div className="left-half-clipper">
              <div className="first50-bar"></div>
              <div className="value-bar"></div>
            </div>
          </div>
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text className="date">{item.release_date}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
