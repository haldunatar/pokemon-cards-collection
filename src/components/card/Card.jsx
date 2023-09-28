import Button from "react-bootstrap/Button";
// import Bcard from "react-bootstrap/Bcard";
import { Card as Bcard } from "react-bootstrap";

export function Card({ item, button, onCardClick }) {
  return (
    <>
      <Bcard id={item?.id} style={{ width: "18rem" }}>
        <Bcard.Img variant="top" src={item?.images?.small} />
        <Bcard.Body>
          <Button
            variant="primary"
            disabled={button?.disabled}
            onClick={() => onCardClick(item)}
          >
            {button.text}
          </Button>
        </Bcard.Body>
      </Bcard>
    </>
  );
}
