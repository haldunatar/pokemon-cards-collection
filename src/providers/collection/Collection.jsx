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

      setCollection(() => {
        return newState;
      });
    }
  };

  const removeFromCollectionContext = (card) => {
    if (card) {
      setCollection(() => {
        return collection.list?.filter((item) => item.id !== card.id);
      });
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
