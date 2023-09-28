import { createContext, useState } from "react";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collection, setCollection] = useState({
    loading: false,
    list: null,
    error: null,
  });

  const addToCollectionContext = (collectionItem) => {
    if (collectionItem) {
      const list = Array.isArray(collectionItem)
        ? [...(collection?.list || []), ...collectionItem]
        : [...(collection?.list || []), collectionItem];

      const newState = {
        ...collection,
        list,
      };

      setCollection(() => newState);
    }
  };

  const removeFromCollectionContext = (card) => {
    if (card) {
      const newState = {
        ...collection,
        list: collection.list?.filter((item) => item.id !== card),
      };
      setCollection(() => newState);
    }
  };

  return (
    <>
      <CollectionContext.Provider
        value={{
          collection,
          addToCollectionContext,
          removeFromCollectionContext,
        }}
      >
        {children}
      </CollectionContext.Provider>
    </>
  );
}
