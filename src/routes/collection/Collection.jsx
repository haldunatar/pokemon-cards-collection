import { useContext, useEffect } from "react";
import { CardContainer } from "../../components/card/Card";
import "../cards-list/cardList.css";
import { CollectionContext } from "../../providers/collection/Collection";
import { CollectionService } from "../../services/collection/Collection.service";

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

  return (
    <section>
      <h1>Collection</h1>
      {collection?.error ? (
        "Sth went wrong.."
      ) : collection?.loading ? (
        <img src="pokemon.png" className="spinner" />
      ) : collection.list && collection.list.length === 0 ? (
        "There is no card in collection"
      ) : (
        <div className="grid-container">
          {collection.list?.map((item) => {
            return (
              <div className="card-item" key={item?.id}>
                <CardContainer item={item} image={item?.images?.small} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
