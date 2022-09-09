import { InputGroup, FormControl, Button } from "react-bootstrap";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import './InputSearch.css'

const InputSearch = () => {
  return (
    <>
      <InputGroup className="mb-5">
        <FormControl className="" placeholder="Buscar por um filme" id="Input"/>
        <Button className="px-5 text-white" variant="outline-secondary" id="button">
          Pesquisar
        </Button>
      </InputGroup>
    </>
  );
};

export default InputSearch;
