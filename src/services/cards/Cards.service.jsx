import { useContext } from "react";
import { cardsUrl } from "../../common/constants/api-urls";
import { CardListContext } from "../../providers/card-list/CardList";

export function CardsService() {
  const { updateCardList } = useContext(CardListContext);

  const fetchCards = (searchKey) => {
    if (!searchKey) {
      throw new Error("You can't search cards without a searchKey!");
    }
    updateCardList({ loading: true });

    fetch(`${cardsUrl}?name_like=${searchKey}`)
      .then((res) => res.json())
      .then(
        (cards) => {
          updateCardList({
            list: cards,
            loading: false,
          });
        },
        () => updateCardList({ error: true })
      );
  };

  return { fetchCards };
}
