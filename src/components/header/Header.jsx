import "./Header.css";
import { Search } from "./search/Search";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect } from "react";
import { CollectionContext } from "../../providers/collection/Collection";
import { CollectionService } from "../../services/collection/Collection.service";

export function Header() {
  const { collection, addToCollectionContext } = useContext(CollectionContext);
  const service = CollectionService();

  useEffect(() => {
    const collection = service.getCollection();
    addToCollectionContext(collection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="header" fluid>
        <Row>
          <Col className="col" sm>
            <img src="pokemon.png" className="logo" />
          </Col>
          <Col className="col" sm xs={6}>
            <Search />
          </Col>
          <Col className="col" sm>
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
