import Alert from "react-bootstrap/Alert";
import { CardContainer } from "../card/Card";
import "./cardList.css";

export function CardListContainer({
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
                <CardContainer
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
