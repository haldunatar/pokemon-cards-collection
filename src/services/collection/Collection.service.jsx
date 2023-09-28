import { useContext } from "react";
import { collectionUrl } from "../../common/constants/api-urls";
import { CollectionContext } from "../../providers/collection/Collection";

export function CollectionService() {
  const { addToCollectionContext, removeFromCollectionContext } =
    useContext(CollectionContext);

  const fetchCollection = () => {
    fetch(`${collectionUrl}`)
      .then((res) => res.json())
      .then((collection) => addToCollectionContext(collection));
  };

  const addToCollection = (card) => {
    const body = JSON.stringify({ ...card });
    fetch(collectionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then(() => {
      addToCollectionContext(card);
    });
  };

  const removeFromCollection = (cardId) => {
    fetch(`${collectionUrl}/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      removeFromCollectionContext(cardId);
    });
  };

  return {
    fetchCollection,
    addToCollection,
    removeFromCollection,
  };
}
