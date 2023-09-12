import { useContext } from "react";
import { CardContainer } from "../../components/card/Card";
import { CardListContext } from "../../providers/card-list/CardList";
import { CollectionService } from "../../services/collection/Collection.service";
import Alert from "react-bootstrap/Alert";
import "./cardList.css";

export function CardList() {
  const { cardList, updateSelectedCards } = useContext(CardListContext);
  const service = CollectionService();

  function addToCollection(card) {
    service.addToCollection(card);
    updateSelectedCards(card.id);
  }

  return (
    <section>
      <h1>Pokemon card list</h1>
      {cardList.error ? (
        <Alert variant="danger">Oeps! Service error!</Alert>
      ) : cardList.loading ? (
        <img src="pokemon.png" className="spinner" />
      ) : cardList?.list?.length === 0 ? (
        <Alert variant="warning">No pokemon cards found</Alert>
      ) : (
        <div className="grid-container">
          {cardList.list?.map((item) => {
            return (
              <div className="card-item" key={item.id}>
                <CardContainer item={item} onCardClick={addToCollection} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
