import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CardContainer({ item, button, onCardClick }) {
  return (
    <>
      <Card id={item?.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item?.images?.small} />
        <Card.Body>
          <Button
            variant="primary"
            disabled={button?.disabled}
            onClick={() => onCardClick(item)}
          >
            {button.text}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
