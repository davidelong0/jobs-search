import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom"; // per la navigazione

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.searchResults);
  const navigate = useNavigate(); 

  const goToSearchPage = () => {
    navigate("/"); // Naviga alla pagina di ricerca
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mt-3 mb-5">
          <h2>Risultati della ricerca</h2>
          {jobs.length === 0 ? (
            <p>Nessun risultato trovato.</p>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto">
          <Button variant="secondary" onClick={goToSearchPage}>
            🔙 Torna alla ricerca
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
