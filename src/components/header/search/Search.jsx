import { useEffect, useRef } from "react";
import { debounce } from "lodash";
import { SearchInput } from "./search-input/SearchInput";
import { CardsService } from "../../../services/cards/Cards.service";

export function Search() {
  const service = CardsService();

  const getPokemons = useRef(
    debounce((searchKey) => service.fetchCards(searchKey), 500)
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
