import { useContext } from "react";
import { CardListContext } from "../../providers/card-list/CardList";
import { CollectionService } from "../../services/collection/Collection.service";

import "./cardList.css";
import { CardListContainer } from "../../components/card-list/CardList";

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

      <CardListContainer
        list={cardList.list}
        loading={cardList.loading}
        error={cardList.error ? "Oeps! Service error!" : null}
        notification={
          cardList?.list?.length === 0 ? "No pokemon cards found" : null
        }
        cardHandler={addToCollection}
      />
    </section>
  );
}
