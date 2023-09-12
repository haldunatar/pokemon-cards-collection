import { useContext } from "react";
import { CollectionContext } from "../../providers/collection/Collection";

export function CollectionService() {
  const { addToCollectionContext, removeFromCollectionContext } =
    useContext(CollectionContext);

  const getCollection = () => {
    return JSON.parse(localStorage.getItem("collection"));
  };

  const addToCollection = (card) => {
    const collection = JSON.parse(localStorage.getItem("collection"));
    
    localStorage.setItem(
      "collection",
      JSON.stringify(collection ? [...collection, card] : [card])
    );

    addToCollectionContext(card);
  };

  const removeFromCollection = (cardId) => {
    const collection = JSON.parse(localStorage.getItem("collection"));

    localStorage.setItem(
      "collection",
      JSON.stringify(collection.filter((item) => item.id !== cardId))
    );

    removeFromCollectionContext(cardId);
  };

  return { getCollection, addToCollection, removeFromCollection };
}
