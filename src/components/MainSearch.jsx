import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/actions";
import { useNavigate } from "react-router-dom"; 

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchResults(query)); 
    navigate("/company"); 
  };

  const goToFavourites = () => {
    navigate("/favourites"); 
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
            <Button variant="primary" type="submit" className="mt-2">
              Search
            </Button>
          </Form>
        </Col>
        
        <Col xs={10} className="mx-auto mt-4">
          <Button variant="secondary" onClick={goToFavourites}>
            Vai ai Preferiti
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
