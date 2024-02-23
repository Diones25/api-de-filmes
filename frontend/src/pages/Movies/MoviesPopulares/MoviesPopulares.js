import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import api from "../../../service/api.js";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from '../../../components/Banner/Banner.js';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Pagination from '../../../components/Pagination/Pagination.js';
import "../Movie.css";

import InputSearch from "../../../components/InputSearch/InputSearch.js";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

let PageSize = 10;

const MoviesPopulares = () => { 
  const [moviePopulares, setMoviePopulares] = useState([]);
  const [loading, setLoading] = useState(true);

  const [total, setTotal] = useState(0); 
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    api
      .get(`/movie/popular?page=${currentPage}`)
      .then((response) => {
        
        setMoviePopulares(response.data.results.retornoEsperado);
        setTotal(response.data.results.total_pages);
        const totalPages = Math.ceil(total / limit);

        const arrayPages = [];
        for (let i = 1; i <= totalPages; i++) { 
          arrayPages.push(i);
        }

        setPages(arrayPages);

        console.log("Total de páginas: ", response.data.results.total_pages)
        console.log("Total de resultados: ", response.data.results.total_results)
        console.log("Página atual: ", response.data.results.page)

        console.log("TOTAL",total)
        console.log("currenPage ==> ", currentPage)

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, total]);

  let data = pages;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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

          {moviePopulares &&
            <Row>
              {moviePopulares.map((item, index) => (
                <Col className="col my-2 md-4 lg-3" key={index}>
                  <Link id="Link" to={`/movie/${item.id}`}>
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
                            (item.vote_average * 10).toFixed(0)
                          }`}
                        >
                          <span className="number">{(item.vote_average * 10).toFixed(0)}</span>
                          <span className="percent">%</span>
                          <div className="left-half-clipper">
                            <div className="first50-bar"></div>
                            <div className="value-bar"></div>
                          </div>
                        </div>
                        <Card.Title className="title">{item.title}</Card.Title>
                        <Card.Text className="date">
                          {item.release_date}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          }

          <div className="d-flex justify-content-center pb-4">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default MoviesPopulares;
