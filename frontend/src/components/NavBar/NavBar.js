import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
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
                    <Link className="dropdown-item" to="/">Populares</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movie/now_playing">Em cartaz</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/movie/upcoming">Próximas estréias</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/movie/top_rated'>Mais bem avaliados</Link>                    
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
                    <Link className="dropdown-item" to='/tv'>Populares</Link>                                      
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/tv/airing_today'>Em exibição hoje</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/tv/on_the_air'>Na tv</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/tv/top_rated'>Mais bem avaliados</Link>
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
                    <Link className="dropdown-item" to='/person/popular'>Populares</Link>
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
