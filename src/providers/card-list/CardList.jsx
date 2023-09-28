import { createContext, useState } from "react";

export const CardListContext = createContext();

export function CardListProvider({ children }) {
  const [cardList, setCardList] = useState({
    loading: false,
    list: null,
    error: null,
  });

  const updateCardList = (newState) => {
    if (newState) {
      setCardList(() => newState);
    }
  };

  const updateSelectedCards = (selectedCardId) => {
    if (selectedCardId) {
      const list = cardList.list?.map((item) => {
        if (item.id === selectedCardId) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return item;
        }
      });
      const newCardListState = {
        ...cardList,
        list,
      };

      setCardList(() => newCardListState);
    }
  };

  return (
    <>
      <CardListContext.Provider
        value={{ cardList, updateCardList, updateSelectedCards }}
      >
        {children}
      </CardListContext.Provider>
    </>
  );
}
