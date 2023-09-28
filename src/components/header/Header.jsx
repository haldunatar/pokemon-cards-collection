import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { CollectionContext } from "../../providers/collection/Collection";
import { useEffect } from "react";
import { CollectionService } from "../../services/collection/Collection.service";

export function Header() {
  const { collection } = useContext(CollectionContext);
  const service = CollectionService();

  useEffect(() => {
    service.fetchCollection();
  }, []);

  return (
    <>
      <Container className="header" fluid>
        <Row>
          <Col className="col" sm xs={6}>
            <Link to="/cardList">
              <img src="pokemon.png" className="logo" />
            </Link>
          </Col>
          <Col className="col" sm xs={6}>
            <Link to="/collection">
              Collection
              <span className="collection-amount">
                {collection.list?.length || 0}
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
