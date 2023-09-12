import { CollectionProvider } from "./collection/Collection";
import { CardListProvider } from "./card-list/CardList";

export function AppProviders({ children }) {
  return (
    <>
      <CollectionProvider>
        <CardListProvider>{children}</CardListProvider>
      </CollectionProvider>
    </>
  );
}
