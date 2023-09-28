import { useContext } from "react";
import { CollectionContext } from "../../providers/collection/Collection";
import { CollectionService } from "../../services/collection/Collection.service";
import { CardListContainer } from "../../components/card-list/CardList";
import "../cards-list/cardList.css";

export function Collection() {
  const { collection } = useContext(CollectionContext);
  const collectionService = CollectionService();

  function dropFromCollection(card) {
    collectionService.removeFromCollection(card.id);
  }

  return (
    <section>
      <h1>Collection</h1>
      <CardListContainer
        list={collection.list}
        loading={collection.loading}
        collectionPage={true}
        error={collection.error ? "Oeps! Service error!" : null}
        notification={
          collection?.list?.length === 0
            ? "There is no card in collection"
            : null
        }
        cardHandler={dropFromCollection}
      />
    </section>
  );
}
