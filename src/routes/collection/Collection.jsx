import { useContext, useEffect } from "react";
import "../cards-list/cardList.css";
import { CollectionContext } from "../../providers/collection/Collection";
import { CollectionService } from "../../services/collection/Collection.service";
import { CardListContainer } from "../../components/card-list/CardList";

export function Collection() {
  const { collection, addToCollectionContext } = useContext(CollectionContext);
  const collectionService = CollectionService();

  useEffect(() => {
    if (!collection.list) {
      const collectionList = collectionService.getCollection();
      addToCollectionContext(collectionList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
