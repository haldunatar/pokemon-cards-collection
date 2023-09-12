import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CardContainer({ item, onCardClick }) {
  return (
    <>
      <Card id={item?.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item?.images?.small} />
        <Card.Body>
          {item?.selected ? (
            <Button variant="primary" disabled>
              Added to collection
            </Button>
          ) : (
            <Button variant="primary" onClick={() => onCardClick(item)}>
              Add to collection
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
