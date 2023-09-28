import { useContext } from "react";
import { CardListContext } from "../../providers/card-list/CardList";
import { CollectionService } from "../../services/collection/Collection.service";

import "./cardList.css";
import { CardList } from "../../components/card-list/CardList";
import { Search } from "../../components/header/search/Search";
import { CollectionContext } from "../../providers/collection/Collection";

export function CardListPage() {
  const { cardList, updateSelectedCards } = useContext(CardListContext);
  const service = CollectionService();
  const { collection } = useContext(CollectionContext);

  function addToCollection(card) {
    service.addToCollection(card);
    updateSelectedCards(card.id);
  }

  const getSelectedCards = (cards) => {
    if (!cards) {
      return [];
    }
    return cards?.map((card) => {
      const selected = collection.list?.some((item) => {
        return item.id === card.id;
      })
        ? true
        : false;

      return {
        ...card,
        selected,
      };
    });
  };
  return (
    <section>
      <h1>Pokemon card list</h1>

      <Search />

      <CardList
        list={getSelectedCards(cardList.list)}
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
