import { Container } from "react-bootstrap";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const Banner = () => {
  return (
    <>
      <div className="jumbotron py-5" style={{ background: "#0285AF" }}>
        <Container>
          <div className="text-white">
            <h1 className="display-5 pt-5">Bem vindo (a)</h1>
            <h2 className="display-6 pb-4">Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h2>  
          </div>          
        </Container>
      </div>
    </>
  );
};

export default Banner;
