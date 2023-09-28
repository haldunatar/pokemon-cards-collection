import Alert from "react-bootstrap/Alert";
import { Card } from "../card/Card";
import "./cardList.css";

export function CardList({
  list,
  loading,
  error,
  notification,
  collectionPage,
  cardHandler,
}) {
  return (
    <>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : loading ? (
        <img src="pokemon.png" className="spinner" />
      ) : notification ? (
        <Alert variant="warning">{notification}</Alert>
      ) : (
        <div className="grid-container">
          {list?.map((item) => {
            return (
              <div className="card-item" key={item.id}>
                <Card
                  item={item}
                  button={{
                    disabled: item.selected,
                    text: collectionPage
                      ? "Remove from collection"
                      : item.selected
                      ? "Added to collection"
                      : "Add to collection",
                  }}
                  onCardClick={cardHandler}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
