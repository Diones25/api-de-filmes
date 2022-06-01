import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import './Footer.css';
import logoFooter from '../../assets/img/logo_footer.png';

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logoFooter} />
            </div>
            <div className="col-md-8 mt-3 mt-md-0 mt-lg-0">
              <span>©Copyright <span>{new Date().getFullYear()}</span> Todos os direitos reservados.</span>              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
