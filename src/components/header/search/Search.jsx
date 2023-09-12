import pokemon from "pokemontcgsdk";
import { useContext, useEffect, useRef } from "react";
import { debounce } from "lodash";
import { SearchInput } from "./search-input/SearchInput";
import { CardListContext } from "../../../providers/card-list/CardList";
import { CollectionService } from "../../../services/collection/Collection.service";

export function Search() {
  const { updateCardList } = useContext(CardListContext);
  const service = CollectionService();

  const getPokemons = useRef(
    debounce((searchKey) => {
      updateCardList({ loading: true });

      // TODO: refactor this
      pokemon.card.where({ q: `name:${searchKey}` }).then(
        (result) => {
          const cards = result?.data.map((card) => {
            const selected = service.getCollection()?.some((item) => {
              return item.id === card.id;
            })
              ? true
              : false;

            return {
              ...card,
              selected,
            };
          });
          updateCardList({
            list: cards,
            loading: false,
          });
        },
        () => updateCardList({ error: true })
      );
    }, 500)
  ).current;

  function handleSearch(searchKey, isValidInput) {
    if (searchKey && isValidInput) getPokemons(searchKey);
  }

  useEffect(() => {
    return () => {
      getPokemons.cancel();
    };
  }, [getPokemons]);

  return (
    <>
      <SearchInput onSearch={handleSearch} />
    </>
  );
}
