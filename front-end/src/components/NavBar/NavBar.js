import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/img/logo.png";
import './Navbar.css';

const NavBar = () => {
  return (
    <>
      <Navbar className="bg text-white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img alt="logo" id="logo" src={logo} className="d-inline-block align-top" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item dropdown">
                <span
                  className="nav-link text-white"
                  id="filmes"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "bold", fontSize: "1.1em" }}
                >
                  Filmes
                </span>
                <ul className="dropdown-menu" aria-labelledby="filmes">
                  <li>
                    <a className="dropdown-item" href="#">
                      Populares
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Em cartaz
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Próximas estréias
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mais bem avaliados
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link text-white mx-3"
                  id="series"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "bold", fontSize: "1.1em" }}
                >
                  Séries
                </span>
                <ul className="dropdown-menu" aria-labelledby="series">
                  <li>
                    <a className="dropdown-item" href="#">
                      Populares
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Em exibição hoje
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Na tv
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mais bem avaliados
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link text-white"
                  id="pessoas"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "bold", fontSize: "1.1em" }}
                >
                  Pessoas
                </span>
                <ul className="dropdown-menu" aria-labelledby="pessoas">
                  <li>
                    <a className="dropdown-item" href="#">
                      Populares
                    </a>
                  </li>
                </ul>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
